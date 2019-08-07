
var main = document.getElementsByClassName('main')[0]
var go = document.getElementsByClassName('go')[0]
var wrapper = document.getElementsByClassName('wrapper')[0]

var num = 0;	//得分
var speed = 5;	//速度
var flag = true;
var timer;		//要先定义好定时器，不然到第93行会报错:timer is nodefiend
	
//往main插入一行	
function createODiv(){
	//创建行
	var oDiv = document.createElement('div');
	oDiv.setAttribute('class','row');
	
	//每行fro四个列
	for(var i = 0; i < 4 ;i++){
		var iDiv = document.createElement('div');
		// 将创建的列div插入到行中
		oDiv.appendChild(iDiv);
	}
	
	//插入main里
	if(main.childNodes.length == 0){
		main.appendChild(oDiv);
	}else{
		main.insertBefore(oDiv,main.children[0]);
	}
	//随机0~3
	var index = Math.floor(Math.random()*4)
	
	//创建黑块
	var blackDiv = oDiv.children[index]
	//标记黑块
	blackDiv.setAttribute('class','i');
	blackDiv.style.background = 'black';
}	

//运动？？？？？？？？？？？？？？？？？？？？
function move(){
	// 先清除一下定时器
    clearInterval(timer);
    // 设置定时器 将main移动
	timer = setInterval(function (){		
		//因为main和wrapper的大小是一样的,所以任何情况main.offsetTop == main.style.top;
        var step = parseInt(main.offsetTop) + speed;	//每20毫秒加5
        main.style.top = step + 'px';					//使其运动
        // main.offsetTop=0也即当main运动到与wrapper重合时，将main重新移到top值为-150，同时在上面插入新的一行
        if (parseInt(main.offsetTop) >= 0) {
            createODiv();
			//初始化时将main向上移动150px(也就是行的高度),即 top:-150px
            main.style.top = '-150px';
        }
		//打印一下
		/* console.log('main.offsetTop',main.offsetTop,'main.style.top',main.style.top) */
        var len = main.children.length;	//有多少行
        // 判断下移元素的最后一行中是否包含未点击方块
        if (len == 6) {	//当行数达到6时
            for (var i = 0; i < 4; i++) {
				//遍历最后一行的4列，如果发现有class名是'li'的(也就是没有点击黑块)；则游戏结束
                if (main.children[len - 1].children[i].classList.contains('i')) {
                    // 利用已经标记的class进行判断  
                    alert('游戏结束，得分：' + num);
                    clearInterval(timer);
                    // flag 用于标记当前游戏是否结束
                    flag = false;
                }
            }
            // 当元素运动到最下方 移除main区域中的最后一行
            main.removeChild(main.children[len - 1]);
        }
		
	},20)
	//触发点击黑块事件
	clickBlackDiv();
}

//点击黑块事件
function clickBlackDiv(){
	main.onclick = function(e){
		//!!游戏结束后就不能点击黑块了
		if(flag){
			var traget = e.target;
			//如果点击到了黑块
			if(traget.className == 'i'){	
				console.log(traget.className == 'i')
				traget.style.backgroundColor = 'white';
				traget.classList.remove('i');
				num++;
			}else{
				alert('游戏结束  得分：'+ num);
				//清除计时器
				clearInterval(timer);
				//标记失败
				flag = false;
			}
			// 提高速度  改变每次改变的距离
			// 当当前分数达到能被10整除时 提高速度
			if(num%10 == 0){	//随着分数的增加，而增加速度
				speed ++
			}
		}
	}
	
}

//初始化
function init(dd){
	if(!dd){
		main.innerHTML = ''
	}
}


function start(){
	go.onclick = function(){
		go.style.display = 'none'
		move()
	}
}
start()
