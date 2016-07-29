<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<html lang="pl">
<head>
	<meta charset="utf-8" />
	<title>Hangman</title>
	<link href='https://fonts.googleapis.com/css?family=Inconsolata|Source+Code+Pro:200&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
	<link type="text/css" rel="stylesheet" href="./stylesheets/hello.css" />
	<script src="./js/main.js"></script>
</head>
<body>
	<div id="content">
		<div id="password"></div>
		<div id="graphic">
			<img alt="hangman" src="./images/s0.jpg" />
		</div>
		<div id="alphabet"></div>
		<div style="clear: both;"></div>
		
		<div id="left-button">
			<button class="myButton" onclick="location.reload();">Od nowa</button>
		</div>
		<div id="right-button">
			<button id="l-guess" class="myButton" onclick="guess();">Zgaduję</button>
		</div>
		<div style="clear: both;"></div>
		
	</div>
</body>
</html>