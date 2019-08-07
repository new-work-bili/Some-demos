var timer;
var flag = true;
var spend = 5;
var	num = 0;


var main = $('.main');
/* var main2 = document.getElementsByClassName('main')[0]; */

//往main插入一行的函数
function createDiv(){
	//行
	var oDiv = $('<div></div>');
	oDiv.attr('class','row');
	//0~3
	var index =Math.floor(Math.random()*4);
	//
	for(var i = 0; i < 4; i++){

		//列
		var iDiv = $('<div></div>');
		if(i == index){
			$(iDiv).attr('class','black')
			$(iDiv).css('background-color','black')
		}
		oDiv.append(iDiv);
	}
	//插入
	if(main.children().length == 0){
		main.append(oDiv);
	}else{
		//??????????
		oDiv.insertBefore(main.children()[0]);
		//为什么不能用之前的？ 因为main和oDiv已经$()过了，不能在使用原生的方法了
		//main.insertBefore(oDiv,main.children[0]);
	}
	
}

//运动
function move(){
	clearInterval(timer);
	timer = setInterval(function(){
		//原生里用offsetTop，这里用top
		var step = parseInt(main.css('top')) + spend;
		main.css('top',step+'px');
		//
		if(parseInt(main.css('top')) >= 0){
			createDiv()
			main.css('top','-150px');
		}
		//
		var len = main.children().length;
		if(len == 6){
			for(var i = 0; i < 4; i++){
				//为什么用$()包裹住？
				if ($(main.children()[len - 1].children[i]).hasClass('black')) {
					alert('游戏结束 得分:' + num);
					flag = false;
					clearInterval(timer);
				}
			}
			$(main.children()[len - 1]).remove();
		}

	},20)
	clickBlack();
}

//判断点击是否为白块
function clickBlack(){
	main.on('click',(e) => {
		var event = e || window.event;//兼容IE
		var target = event.target;
		if(flag){
			if($(target).hasClass('black')){
				num++;
				$(target).removeClass();
				$(target).css('background','#bbb')
			}else{
				alert('游戏结束 得分:' + num);
				flag = false;
				clearInterval(timer);
			}
			//
			if(num % 10 ==0){
				spend++;
			}
		}
	})
}

//点击go开始
function clickStart(){
	$('a').on('click',() =>{
		$('.go').css('display','none');
		move()
	})
}
clickStart();


