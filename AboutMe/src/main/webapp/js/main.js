var password = getPassword();
password = password.toUpperCase();
var fail_counter = 0;
var max_fails = 9;
var changeImage = true;

var hidden_password = "";
for (var int = 0; int < password.length; int++) {
	if (password.charAt(int) == " ") {
		hidden_password = hidden_password + " ";
	} else {
		hidden_password = hidden_password + "-";
	}
}

window.onload = start;

function start() {
	initLetters();
	write_password();
	write_alphabet();
}

var letters = new Array(35);
function initLetters() {
	letters[0] = "A";
	letters[1] = "Ą";
	letters[2] = "B";
	letters[3] = "C";
	letters[4] = "Ć";
	letters[5] = "D";
	letters[6] = "E";
	letters[7] = "Ę";
	letters[8] = "F";
	letters[9] = "G";
	letters[10] = "H";
	letters[11] = "I";
	letters[12] = "J";
	letters[13] = "K";
	letters[14] = "L";
	letters[15] = "Ł";
	letters[16] = "M";
	letters[17] = "N";
	letters[18] = "Ń";
	letters[19] = "O";
	letters[20] = "Ó";
	letters[21] = "P";
	letters[22] = "Q";
	letters[23] = "R";
	letters[24] = "S";
	letters[25] = "Ś";
	letters[26] = "T";
	letters[27] = "U";
	letters[28] = "V";
	letters[29] = "W";
	letters[30] = "X";
	letters[31] = "Y";
	letters[32] = "Z";
	letters[33] = "Ż";
	letters[34] = "Ź";
}

function write_password() {
	document.getElementById("password").innerHTML = hidden_password;
}

function write_alphabet() {
	var div_content = "";
	for (var int = 0; int < 35; int++) {
		if (int % 7 == 0) {
			div_content = div_content + "<div style=\"clear: both;\"></div>";
		}

		div_content = div_content + "<div id=\"l-" + int + "\" onclick=\"check(" + int + ") \" class=\"letter\">"
				+ letters[int] + "</div>";
	}
	document.getElementById("alphabet").innerHTML = div_content;
}
// w ten sposob dodajemy metode do typu String
String.prototype.setChar = function(position, char) {
	if (position < this.length) {
		return this.substr(0, position) + char + this.substr(position + 1);
	} else {
		return this.toString();
	}
}

function check(id) {
	document.getElementById("l-" + id).setAttribute("onclick", ";");
	var hit = false;
	for (var int = 0; int < password.length; int++) {
		if (password.charAt(int) == letters[id]) {
			hit = true;
			hidden_password = hidden_password.setChar(int, letters[id]);
		}
	}

	if (hit) {
		write_password();
		document.getElementById("l-" + id).className += " correct";

	} else {
		document.getElementById("l-" + id).className += " wrong";
		fail_counter++;
		if(changeImage){
			document.getElementById("graphic").innerHTML = "<img alt=\"hangman\" src=\"./images/s" + fail_counter + ".jpg\" />";
		}
	}
	
	if (fail_counter == max_fails) {
		document.getElementById("alphabet").innerHTML = "przegrałeś";
	} else if (hidden_password == password) {
		document.getElementById("alphabet").innerHTML = "wygrałeś";
	}

}

function getPassword() {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", "http://localhost:8080/_ah/api/myApi/v1/createPassword", false);
	xmlHttp.send(null);
	var json = JSON.parse(xmlHttp.responseText);
	return json.password;
}

function guess() {
	var pass = prompt("Podaj hasło", "");
	
	if (pass != null) {
		if(password == pass || password ==  pass.toUpperCase()){
			hidden_password = password;
			changeImage = false;
			check("guess");
		}else{
			fail_counter = (max_fails - 1);
			check("guess");
			hidden_password = password;
		}
		write_password();
	}
}