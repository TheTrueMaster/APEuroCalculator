var mc = 55;
var saq = 0;
var saq1 = 3;
var saq2 = 3;
var saq3 = 3;
var saq4 = 3;
var leq = 6;
var dbq = 7;
var ap = -1;
score();
function updateVar(type, value, totalAmount) {
	if (value == "0") {
		value = 0;
	}
	if (type == 'mc') {
		mc = value;
	}
	else if (type == 'dbq') {
		dbq = value;
	}
	else if (type == 'leq') {
		leq = value;
	}
	else if (type == 'saq1') {
		saq1 = value;
	}
	else if (type == 'saq2') {
		saq3 = value;
	}
	else if (type == 'saq3') {
		saq3 = value;
		console.log(saq3);
	}
	else if (type == "saq4") {
		saq4 = value;
	}
	console.log("New Score for " + type + " with value " + value);
}

function score() {
	saq = 0;
	saq = saq1 + saq2 + saq3 + saq4;
	console.log("1: " + saq1 + " 2: " + saq2 + " 3: " + saq3 + " 4: " + saq4);
	console.log("leq " + leq + " saq " + saq + "dbq" + dbq + "mc" + mc);

	totalScore = 0.4*(mc/55)+ 0.2*(saq/12) + 0.25*(dbq/7) + 0.15*(leq/6);
	console.log("TOTAL SCORE: " + totalScore + "%");
	while (true) {
		if (totalScore >= 0.72) {
			ap = 5;
			break;
		}
		else if (totalScore >= 0.66) {
			ap = 4;
			break;
		}
		else if (totalScore >= 0.5) {
			ap = 3;
			break;
		}
		else if (totalScore >= 0.427) {
			ap = 2;
			break;
		}
		else {
			ap = 1;
			break;
		}
	}
	console.log("Based on the General AP Curve, calculated from other exams, you scored a " + ap + " on this AP Exam");
	document.getElementById("scoreLabel").innerHTML = "Your Score is: " + ap;
}
