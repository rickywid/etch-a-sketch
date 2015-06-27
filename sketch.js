
$(document).ready(function(){


	//FIX BORDER ISSUE -- 17 X 17 GRID NOT PROPER

	//create pixel size(16px + borders(x2)) and container size(530px)
	for(i = 0; i < 16 * 16; i++){
		//add pixels to container
		$('.container').append('<div class="grid"></div>');
		var x = 16 *2;
		var y = 528;
		var z = x + y;
		//create container size
		$('.container').css({'width':z,'height':z,'border':'1px solid black'});
};	


	$('.grid').on('mouseenter',function(){
		$(this).addClass('highlight');
		//	$('.grid').on('mouseleave',function(){
		//		$('.highlight').fadeTo('fast',0);
//});
	});


	//when button is clicked, clear grid and ask for new size
	$('button').on('click',function(){

		//set default grid color
		$(this).closest('#button').next().find('.grid').css('background-color','#eeeeee');
		var gridSize = prompt("what size do you want the grid?");		

	//calculate grid size
	function calcGrid(num){
		var area = num * num;
		return area;
	};

	//calculate pixel size
	function pxSize(num){
		var pixelSize = 532/num;
		var n = pixelSize.toString(); 
		return n;
	};
	//calculate pixel size with borders
	function pxSize2(num){
		var pixelSize = 532;
		var num = 2 *num;
		var n = num + pixelSize;
		//var n = pixelSize.toString(); 
		return n;
	};
	//create grid based on pixel size determined by user input
	for(i = 0; i < calcGrid(gridSize); i++){
		$('.container').append('<div class="grid"></div>');
		$('.grid').css({'width':pxSize(gridSize),'height':pxSize(gridSize)});
	};
		//create container
	$('.container').css({'width':pxSize2(gridSize),'height':pxSize2(gridSize)});
	//change grid color while hovering
	$('.grid').on('mouseenter',function(){
		$(this).css('background-color','white');
	});

	});
	//change color selected by user
	$('div').on('click','.blue',function(){
		$('.grid').on('mouseenter',function(){
			$(this).css('background-color','#8783ff');
		});
	});

	$('div').on('click','.red',function(){
		$('.grid').on('mouseenter',function(){
			$(this).css('background-color','#ff6565');
		});
	});
	$('div').on('click','.green',function(){
		$('.grid').on('mouseenter',function(){
			$(this).css('background-color','#4DFF4D');
		});
	});
	$('div').on('click','.yellow',function(){
		$('.grid').on('mouseenter',function(){
			$(this).css('background-color','yellow');
		});
	});

	$('div').on('click','.white',function(){
		$('.grid').on('mouseenter',function(){
			$(this).css('background-color','#ffffff');
		});
	});

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

	$('div').on('click','.rainbow',function(){
		$('.grid').on('mouseenter',function(){
			$(this).css('background-color',getRandomColor());
		});
	});




});

