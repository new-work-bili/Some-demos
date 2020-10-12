const version = 'offline-cache-v5';//版本号，线上更改之后都需要更新这个版本号以便覆盖缓存

// Serverice Worker 安装成功后触发该事件
self.addEventListener('install', function (event) {
	console.log('install')
    // sw.js 有更新，立即生效
    event.waitUntil(self.skipWaiting());
});

// sw.js 有更新时触发该事件
//激活
self.addEventListener('activate', function (event) {
    event.waitUntil(
        Promise.all([
            // 更新客户端
            self.clients.claim(),

            // 删除旧版本的缓存对象
            caches.keys().then(function (cacheList) {
                return Promise.all(
                    cacheList.map(function (cacheName) {
                        if (cacheName !== version) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
        ])
    );
});

// 网页发送请求触发该事件;进行请求的拦截和缓存的判断
self.addEventListener('fetch', function (event) {
    
    console.log('url is', event.request.url)

    event.respondWith(
        caches.match(event.request).then(function (response) {
            // 如果 Service Worker 有自己的返回，就直接返回，减少一次 http 请求
            if (response) {
                return response;
            }

            // 如果 service worker 没有返回，那就得直接请求真实远程服务
            var request = event.request.clone(); // 把原始请求拷过来
            return fetch(request).then(function (httpRes) {
                // 请求失败了，直接返回失败的结果就好了。。
                if (!httpRes || httpRes.status !== 200) {
                    return httpRes;
                }

                // 请求成功的话，将请求缓存起来。
                var responseClone = httpRes.clone();
                caches.open(version).then(function (cache) {
                    cache.put(event.request, responseClone);
                });

                return httpRes;
            });
        })
    );
})