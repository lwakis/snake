const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ground = new Image(); // Создание объекта
ground.src = "img/bgfon.png"; // Указываем нужное изображение

const foodImg = new Image(); // Создание объекта
foodImg.src = "img/food.png"; // Указываем нужное изображение

const moneta = new Image();
moneta.src = "img/moneta.png";

const medal = new Image();
medal.src = "img/medal.png";

const medal2 = new Image();
medal2.src = "img/medal2.png"

const medal3 = new Image();
medal3.src = "img/medal3.png"

const medal4 = new Image();
medal4.src = "img/medal4.png"

const medal5 = new Image();
medal5.src = "img/medal5.png"

const medal6 = new Image();
medal6.src = "img/medal6.png"

const greenbox = new Image();
greenbox.src = "img/green.png"

const graybox = new Image();
graybox.src = "img/gray.png"

const bluebox = new Image();
bluebox.src = "img/blue.png"

const redbox = new Image();
redbox.src = "img/red.png"

let box = 32;

let score = 0;

let tocolor = 'red';

let kh = 1;

let i = 0;

let m = 0;

let lvl = 1;

let rankedmatch = 0;

let battlepass = 0;
localStorage.getItem('battlepasss') ? battlepass=localStorage.getItem('battlepasss') : battlepass=0;

let color = greenbox;//['green'];
localStorage.getItem('colorr') ? color=localStorage.getItem('colorr') : color=greenbox;

let money;
localStorage.getItem('moneyy') > 0 ? money=localStorage.getItem('moneyy') : money=0;

let rank = 0;
localStorage.getItem('rankk') > 0 ? rank=localStorage.getItem('rankk') : rank=0;


let food = {
	x: Math.floor((Math.random() * 17 + 1)) * box,
	y: Math.floor((Math.random() * 15 + 3)) * box,
};

let snake = [];
snake[0] = {
	x: 9 * box,
	y: 10 * box
};

document.addEventListener("keydown", direction);

let dir;

function direction(event) {
	if (event.keyCode == 37 && dir !="right")
		dir = "left"
	else if(event.keyCode == 38 && dir !="down")
		dir = "up"
	else if(event.keyCode == 39 && dir !="left")
		dir = "right"
	else if(event.keyCode == 40 && dir !="up")
		dir = "down"
	if(event.keyCode == 32)
		location.reload();
	 //alert("перезапуск?"); 
}
var baybattlepass = document.getElementById('baybp')
baybattlepass.addEventListener('click',function(e){
	if (money >= 1000) {
		money = money - 1;
		battlepass++;
		localStorage.setItem('battlepasss', battlepass);
		localStorage.setItem('moneyy', money);
	}
})

var buybluecolor = document.getElementById('bayblue');
buybluecolor.addEventListener('click',function(e){
	if ((money >= 10) && (color != 'blue')){
		money = money - 1;
		color = 'blue';
		localStorage.setItem('colorr', color);
		localStorage.setItem('moneyy', money);
	}
})
var buybluecolor = document.getElementById('bayred');
buybluecolor.addEventListener('click',function(e){
	if ((money >= 10) && (color != 'red')){
		money = money - 1;
		color = 'red';
		localStorage.setItem('colorr', color);
	 	localStorage.setItem('moneyy', money);

	}
})

var buybluecolor = document.getElementById('baygreen');
buybluecolor.addEventListener('click',function(e){
	if ((money >= 10) && (color != 'green')){
		money = money - 1;
		color = 'green';
		localStorage.setItem('colorr', color);
		localStorage.setItem('moneyy', money);
	}
})



var buybluecolor = document.getElementById('baygray');
buybluecolor.addEventListener('click',function(e){
	if ((money >= 10) && (color != 'gray')){
		money = money - 1;
		color = 'gray';
		localStorage.setItem('colorr', color);
		localStorage.setItem('moneyy', money);
	}
})



// var dialog = document.querySelector('dialog');
// 		document.querySelector('#show').onclick = function() {
//   		dialog.showModal();
// 	};
// document.querySelector('#close').onclick = function() {
//   dialog.close();
// };

var dialog = document.getElementById('dialog');
		document.getElementById('show').onclick = function() {
  		dialog.showModal();
	};
document.getElementById('close').onclick = function() {
  dialog.close();
};




var gameovers = document.getElementById('gameovers');
	document.getElementById('showgameover').onclick = function() {
		gameovers.showModal();
	};
document.getElementById('restart').onclick = function() {
	gameovers.close();
};



var rankidstats = document.getElementById('rankidstats');
	document.getElementById('open').onclick = function() {
		if (battlepass == 1) {
		rankidstats.showModal();
	 	}
	 	else {
	 		alert("У вас нет Battle pass")
	 	}
	};
document.getElementById('clos').onclick = function() {
	rankidstats.close();
};


// var n1 = document.getElementById('n1');
// 	document.getElementById('n1').onclick = function() {
// 		if (lvl == 1) {
// 		money++;
// 		localStorage.setItem('moneyy', money);
// 	}
// 	};
document.getElementById('n1').onclick = function() { 		// батл пасс 
	if (lvl == 1) {
		money++;
		localStorage.setItem('moneyy', money);
	}
};			
document.getElementById('n2').onclick = function() { 		
	if (lvl == 2) {
		money = money + 50;
		localStorage.setItem('moneyy', money);
	}
};			
document.getElementById('n3').onclick = function() { 		
	if (lvl == 3) {
		color = 'yellow';
		localStorage.setItem('colorr', color);
		localStorage.setItem('moneyy', money);
	}
};
document.getElementById('n4').onclick = function() { 		
	if (lvl == 4) {
		money = money + 75;
		localStorage.setItem('moneyy', money);
	}
};			
document.getElementById('n5').onclick = function() { 		
	if (lvl == 5) {
		money = money + 100;
		localStorage.setItem('moneyy', money);
	}
};			
document.getElementById('n6').onclick = function() { 		
	if (lvl == 6) {
		color = 'violet';
		localStorage.setItem('colorr', color);
		localStorage.setItem('moneyy', money);
	}
};	
document.getElementById('n7').onclick = function() { 		
	if (lvl == 7) {
		money = money + 125;
		localStorage.setItem('moneyy', money);
	}
};			
document.getElementById('n8').onclick = function() { 
	if (lvl == 8) {
		money = money + 150;
		localStorage.setItem('moneyy', money);
	}
};			
document.getElementById('n9').onclick = function() { 	
	if (lvl == 9) {
		money = money + 175;
		localStorage.setItem('moneyy', money);
	}
};	
document.getElementById('n10').onclick = function() { 
	if (lvl == 10) {
		color = 'black';
		localStorage.setItem('colorr', color);
		localStorage.setItem('moneyy', money);
	}
};							

/*
var clickElem = document.getElementById('shopopen');
clickElem.addEventListener('click',function(e){
    document.getElementById('main').style.display = 'block';
    clickElem.style.display = 'none';
})

var clickElemm = document.getElementById('main');
clickElemm.addEventListener('click',function(e){
    document.getElementById('shopopen').style.display = 'block';
    clickElemm.style.display = 'none';
}) */


function eatTail(head, arr) {
		for(let i = 0; i < arr.length; i++) {
			if (head.x == arr[i].x && head.y == arr[i].y) {
				clearInterval(game);
				gameovers.showModal();
			}
			// else if (head.x == arr[i].x && head.y == arr[i].y) {
			// console.log('ee');
			// gameovers.showModal();
			// }
		}
	}
	function drawGame() {
	if (rank >= 100 && rank < 300) {
	ctx.drawImage(ground, 0, 0);
}
	else if (rank >= 300 && rank < 500) { // идея
		ctx.drawImage(ground, 0, 0);
	}
	ctx.drawImage(moneta, 250, 0)
	
	if (rank >= 0 && rank < 100) {    					// Медали
 		ctx.drawImage(medal, 450, 9);
	}
	else if (rank >= 100 && rank < 200) {
		ctx.drawImage(medal2, 450, 9);
	}
	else if (rank >= 200 && rank < 300) {
		ctx.drawImage(medal3, 450, 9);
	}
	else if (rank >= 300 && rank < 400) {
		ctx.drawImage(medal4, 450, 9);
	}
	else if (rank >= 400 && rank < 500) {
		ctx.drawImage(medal5, 450, 9);
	}
	else if (rank >= 400 && rank < 500) {
		ctx.drawImage(medal6, 450, 9);
	}


	ctx.drawImage(foodImg, food.x, food.y);
	for(i = 0; i < snake.length; i++) {	
		ctx.fillStyle = i == 0 ? color : tocolor;
		ctx.fillRect(snake[i].x, snake[i].y, box, box);
	}

	ctx.fillStyle = "white";
	ctx.font = "50px Arial";
	ctx.fillText(score, box * 2.5, box * 1.7);
	ctx.fillText(money, box * 10, box * 1.7);
	ctx.fillText(rank, box * 15.5, box * 1.7);

	let snakeX = snake[0].x;
	let snakeY = snake[0].y;

	if (snakeX == food.x && snakeY == food.y) {
		score++;
		money++;
		localStorage.setItem('moneyy', money);
		//localStorage.setItem('moneyy', money);
		food = {
			x: Math.floor((Math.random() * 17 + 1)) * box,
			y: Math.floor((Math.random() * 15 + 3)) * box,
		};	
	} else {
		snake.pop();
	}	

	// if(snakeX < box || snakeX > box * 17
	// 	|| snakeY < 3 * box || snakeY > box * 17)
	// 	clearInterval(game);

	if (snakeX < box || snakeX > box * 17
		|| snakeY < 3 * box || snakeY > box * 17) {
		clearInterval(game);
		gameovers.showModal();
	// var dialog = document.querySelector('dialog');
	// 	document.getElementById(show) = function() {
 //  		dialog.showModal();
	// };
	}
		if (score == 2 && m == 0 && rank < 100) {                     // рейтинговая система   1 бронза
			rank++;
			m++;
			rankedmatch++;
			localStorage.setItem('rankk', rank);
	}
		else if (score == 4 && m == 1) {
			rank++;
			m++;
			rankedmatch++;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 6 && m == 2) {
			rank = 2 + rank;
			m++;
			rankedmatch = 2 + rankedmatch;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 8 && m == 3) {
			rank = 2 + rank;
			m++;
			rankedmatch = 2 + rankedmatch;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 10 && m == 4) {
			rank = 3 + rank;
			m++;
			rankedmatch = 3 + rankedmatch;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 12 && m == 5) {
			rank = 3 + rank;
			m++;
			rankedmatch = 3 + rankedmatch;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 14 && m == 6) {
			rank = 5 + rank;
			m++;
			rankedmatch = 5 + rankedmatch;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 15 && m == 7) {
			rank = 5 + rank;
			m++;
			rankedmatch = 5 + rankedmatch;
			localStorage.setItem('rankk', rank);
		}


		if (score == 3 && m == 0 && rank >= 100 && rank < 200) {				// рейтинговая система   2 бронза
			rank++;
			m++;
			rankedmatch++;
			localStorage.setItem('rankk', rank);
	}
		else if (score == 5 && m == 1) {
			rank++;
			m++;
			rankedmatch++;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 7 && m == 2) {
			rank = 2 + rank;
			m++;
			rankedmatch = 2 + rankedmatch;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 9 && m == 3) {
			rank = 2 + rank;
			m++;
			rankedmatch = 2 + rankedmatch;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 11 && m == 4) {
			rank = 3 + rank;
			m++;
			rankedmatch = 3 + rankedmatch;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 13 && m == 5) {
			rank = 3 + rank;
			m++;
			rankedmatch = 3 + rankedmatch;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 15 && m == 6) {
			rank = 5 + rank;
			m++;
			rankedmatch = 5 + rankedmatch;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 20 && m == 7) {
			rank = 5 + rank;
			m++;
			rankedmatch = 5 + rankedmatch;
			localStorage.setItem('rankk', rank);
		}


		if (score == 4 && m == 0 && rank >= 200 && rank < 300) { 			  // рейтинговая система  3 бронза
			rank++;
			m++;
			rankedmatch++;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 6 && m == 1) {
			rank++;
			m++;
			rankedmatch++;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 8 && m == 2) {
			rank = 2 + rank;
			m++;
			rankedmatch = 2 + rankedmatch;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 10 && m == 3) {
			rank = 2 + rank;
			m++;
			rankedmatch = 2 + rankedmatch;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 12 && m == 4) {
			rank = 3 + rank;
			m++;
			rankedmatch = 3 + rankedmatch;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 14 && m == 5) {
			rank = 3 + rank;
			m++;
			rankedmatch = 3 + rankedmatch;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 16 && m == 6) {
			rank = 5 + rank;
			m++;
			rankedmatch = 5 + rankedmatch;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 22 && m == 7) {
			rank = 5 + rank;
			m++;
			rankedmatch = 5 + rankedmatch;
			localStorage.setItem('rankk', rank);
		}
		if (score == 5 && m == 0 && rank >= 300 && rank < 400) { 			  // рейтинговая система  3 бронза
			rank++;
			rankedmatch++;
			m++;
			localStorage.setItem('rankk', rank);
	}
		else if (score == 7 && m == 1) {
			rank++;
			m++;
			rankedmatch++;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 9 && m == 2) {
			rank = 2 + rank;
			m++;
			rankedmatch = 2 + rankedmatch;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 11 && m == 3) {
			rank = 2 + rank;
			m++;
			rankedmatch = 2 + rankedmatch;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 13 && m == 4) {
			rank = 3 + rank;
			m++;
			rankedmatch = 3 + rankedmatch;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 15 && m == 5) {
			rank = 3 + rank;
			m++;
			rankedmatch = 3 + rankedmatch;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 17 && m == 6) {
			rank = 5 + rank;
			m++;
			rankedmatch = 5 + rankedmatch;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 23 && m == 7) {
			rank = 5 + rank;
			m++;
			rankedmatch = 5 + rankedmatch;
			localStorage.setItem('rankk', rank);
		}
document.getElementById('rankedmatch').innerHTML = rankedmatch;


	if(dir == "left") snakeX -= box;
	if(dir == "right") snakeX += box;
	if(dir == "up") snakeY -= box;
	if(dir == "down") snakeY += box;


	let newHead = {
		x: snakeX,
		y: snakeY
	};
	eatTail(newHead, snake);

	snake.unshift(newHead);
}

let speed = 100;

let game = setInterval(drawGame, speed); // Вызов функции из вне


