
const medal = new Image();
medal.src = "img/medal.png";

const medal2 = new Image();
medal2.src = "img/medal2.png"

const medal3 = new Image();
medal3.src = "img/medal3.png"

let m = 0;
let rank = 0;
localStorage.getItem('rankk') > 0 ? rank=localStorage.getItem('rankk') : rank=0;


	if (rank >= 0 && rank < 50) {    					// Медали
 		ctx.drawImage(medal, 450, 9);
	}
	else if (rank >= 50 && rank < 100) {
		ctx.drawImage(medal2, 450, 9);
	}
	else if (rank >= 100 && rank < 150) {
		ctx.drawImage(medal3, 450, 9);
	}
ctx.fillText(rank, box * 15.5, box * 1.7);

		if (score == 2 && m == 0 && rank < 50) {                     // рейтинговая система   1 бронза
			rank++;
			m++;
			localStorage.setItem('rankk', rank);
	}
		else if (score == 4 && m == 1) {
			rank++;
			m++;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 6 && m == 2) {
			rank = 2 + rank;
			m++;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 8 && m == 3) {
			rank = 2 + rank;
			m++;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 10 && m == 4) {
			rank = 3 + rank;
			m++;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 12 && m == 5) {
			rank = 3 + rank;
			m++;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 14 && m == 6) {
			rank = 5 + rank;
			m++;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 15 && m == 7) {
			rank = 5 + rank;
			m++;
			localStorage.setItem('rankk', rank);
		}


		if (score == 3 && m == 0 && rank >= 50 && rank < 99) {				// рейтинговая система   2 бронза
			rank++;
			m++;
			localStorage.setItem('rankk', rank);
	}
		else if (score == 5 && m == 1) {
			rank++;
			m++;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 7 && m == 2) {
			rank = 2 + rank;
			m++;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 9 && m == 3) {
			rank = 2 + rank;
			m++;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 11 && m == 4) {
			rank = 3 + rank;
			m++;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 13 && m == 5) {
			rank = 3 + rank;
			m++;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 15 && m == 6) {
			rank = 5 + rank;
			m++;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 20 && m == 7) {
			rank = 5 + rank;
			m++;
			localStorage.setItem('rankk', rank);
		}

		if (score == 4 && m == 0 && rank >= 100 && rank < 150) { 			  // рейтинговая система  3 бронза
			rank++;
			m++;
			localStorage.setItem('rankk', rank);
	}
		else if (score == 6 && m == 1) {
			rank++;
			m++;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 8 && m == 2) {
			rank = 2 + rank;
			m++;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 10 && m == 3) {
			rank = 2 + rank;
			m++;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 12 && m == 4) {
			rank = 3 + rank;
			m++;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 14 && m == 5) {
			rank = 3 + rank;
			m++;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 16 && m == 6) {
			rank = 5 + rank;
			m++;
			localStorage.setItem('rankk', rank);
		}
		else if (score == 22 && m == 7) {
			rank = 5 + rank;
			m++;
			localStorage.setItem('rankk', rank);
		}
