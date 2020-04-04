var video = {
	init: function(options) {
		this.el = options.el;
		this.lineTopWidth = 196	//白色进度宽度
		this.createTemplate();	//HTML
		this.getDot();			//文字打点
		this.mouseEvent()
	},
	createTemplate: function() {
		var template = '';
		for (var i = 0; i < videoList.length; i++) {
			var listData = videoList[i]
			template +=
				`<li class="item">
					<div class="video">
						<div class="default">
							<img src="${listData.poster}" >
							<div class="video_data">
								<span class="play">${this.returnUnit(listData.play)}</span>
								<span class="like">${listData.likes}</span>
								<span class="duration">24:18</span>
							</div>
						</div>
						<div class="mask" index="${i}" style="background-image:url(${listData.pvideo.image[0]})">
							<img src="" >
							<div class="line">
								<div class="line_up"></div>
								<div class="line_down"></div>
								<div class="mark"></div>
							</div>
						</div>
					</div>
						<div class="title">${listData.title}</div>
						<div class="up">${listData.up}</div>
					</li>`;
		}
		var ul = document.createElement('ul');
		ul.innerHTML = template;
		this.el.append(ul)
		// console.log(videoList.length)
	},
	returnUnit(number) {
		var numberSrting = number.toString()
		var one,	//千
			ten,	//万
			hundred;//亿
		oneInit =  Math.floor(numberSrting.substring(numberSrting.length-4,numberSrting.length)	/1000)
		one = oneInit==0?'':oneInit
		console.log(one )
		if(number<10000){
			return number
		}else if(number>10000 && number < 100000000){
			ten = Math.floor(number/10000)
			return ten+'.'+one+'万'
		}else if(number > 100000000){
			tenInit =  Math.floor(numberSrting.substring(numberSrting.length-8,numberSrting.length-4)/1000)
			ten = tenInit==0?'':tenInit
			hundred = Math.floor(number/100000000)
			return hundred+'.'+ten+'亿'
		}
	},
	getDot() {
		var title = document.getElementsByClassName('title')
		var max = 21
		for (var i = 0; i < title.length; i++) {
			var oldText = title[i].innerText
			if (title[i].innerText.length > max) {
				title[i].innerText = oldText.substring(0, max) + '...'
			}
			console.log('titile', title[i].innerText.length)
		}


	},
	mouseEvent(){
		// var videoElemt = document.querySelectorAll('.video')[0]
		var that = this
		this.el.onmousemove = function(e){
			var event = e.target
			var isMask = event.classList.contains('mask')	
			if(isMask){
				var x = e.offsetX
				that.moveTop(event,e,x)	//白色进度条宽度
			}
		}
	},
	moveTop(event,e,x){
		var topEvent = event.getElementsByClassName('line_up')[0]
		var topWidth = e.offsetX*this.lineTopWidth/event.offsetWidth	//因为白色进度条两边都有空隙,所以以比例设置它的宽
		topEvent.style.width = topWidth+'px'
		this.backimg(event,topWidth,x)
	},
	backimg(event,topWidth,x){
		var index = event.getAttribute('index')
		var bgimgData = videoList[index].pvideo
		var length = bgimgData.index.length			// 缩略图中小图的个数
		var xLen = bgimgData.img_x_len;  			// 缩略图片每一行小图的个数
		var picWidth = event.offsetWidth / length;  // 每隔多少宽度更换一张背景
		var ratio = event.offsetWidth/bgimgData.img_x_size//缩放比例:mask的宽/缩略图中每张小图的宽
		var moveIndex = Math.floor(x/picWidth)		//显示第几张小图
		
		var col = moveIndex%xLen					//显示的小图所在列,即x偏移单位
		var row = Math.floor(moveIndex/xLen)		//显示的小图所在行,即y偏移单位
		
		var postionX = -col*bgimgData.img_x_size*ratio;	//x偏移量
		var postionY = -row*bgimgData.img_y_size*ratio;
		
		event.style.backgroundPositionX = postionX+'px'
		event.style.backgroundPositionY = postionY+'px'
		console.log(moveIndex,'第'+row+'行','第'+col+'列')
	}
	
}
