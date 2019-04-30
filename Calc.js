var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var numbers = []
for (var i = 0; i < 999; i++){
	numbers[i] = i;
}
var operators = ['addition', 'subtraction', "multiplication", "division"]
var grammarNumbers = '#JSGF V1.0; grammar numbers; public <number> = ' + numbers.join(' | ') + ' ;'
var grammarOperators = '#JSGF V1.0; grammar operators; public <operator> = ' + operators.join(' | ') + ' ;'

var recognition1 = new SpeechRecognition();
var recognition2 = new SpeechRecognition();
var recognition3 = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

recognition1.grammars = speechRecognitionList;
recognition2.grammars = speechRecognitionList;
recognition3.grammars = speechRecognitionList;

recognition1.interimResults = false;
recognition2.interimResults = false;
recognition3.interimResults = false;

recognition1.maxAlternatives = 1;
recognition2.maxAlternatives = 1;
recognition3.maxAlternatives = 1;

recognition1.lang = 'en-US';
recognition2.lang = 'en-US';
recognition3.lang = 'en-US';

var mic_num1 = document.querySelector('.speak-button-first-number');
var mic_op = document.querySelector('.speak-button-operator');
var mic_num2 = document.querySelector('.speak-button-second-number');
var cal = document.querySelector('.calculate-button');
var num1 = document.querySelector('.num1');
var oper = document.querySelector('.oper');
var num2 = document.querySelector('.num2');
var ans = document.querySelector('.ans');
var num1_ASL = document.querySelector('.num1_ASL');
var oper_ASL = document.querySelector('.oper_ASL');
var num2_ASL = document.querySelector('.num2_ASL');
var ans_ASL = document.querySelector('.ans_ASL');

// Microphone 1 starts

mic_num1.onclick = function(){
	recognition1.start();
}

recognition1.onresult = function(event){
	var last = event.results.length - 1;
	var number = event.results[last][0].transcript;
	num1.textContent = number;
	num1.style.fontSize = "x-large";
	num1.style.fontWeight = "600";
	num1_ASL.textContent = number;
	num1_ASL.style.fontFamily = "ASLfont";
	num1_ASL.style.fontSize = "xx-large";
	num1_ASL.style.fontWeight = "400";
}

recognition1.onspeechend = function() {
	recognition1.stop();
}

recognition1.onnomatch = function(){
	num1.textContent = 'Number not recognized.';
}

recognition1.onerror = function(event){
	num1.textContent = 'Error occured in recognition: ' + event.error;
}

// Microphone 1 ends
// **************************************************
// Microphone 2 starts

mic_op.onclick = function(){
	recognition2.start();
}

recognition2.onresult = function(event){
	var last = event.results.length - 1;
	var op = event.results[last][0].transcript;
	if (op === 'addition'){
		oper.textContent = '+';
		oper_ASL.textContent = '+';
	}
	else if (op === 'subtraction'){
		oper.textContent = '-';
		oper_ASL.textContent = '-';
	}
	else if (op === 'multiplication'){
		oper.textContent = '*';
		oper_ASL.textContent = '*';
	}
	else if (op === 'division'){
		oper.textContent = '/';
		oper_ASL.textContent = '/';
	}

	oper.style.fontSize = "x-large";
	oper.style.fontWeight = "600";
	oper_ASL.style.fontSize = "x-large";
	oper_ASL.style.fontWeight = "600";
}

recognition2.onspeechend = function() {
	recognition2.stop();
}

recognition2.onnomatch = function(){
	oper.textContent = 'Operator not recognized.';
}

recognition2.onerror = function(event){
	oper.textContent = 'Error occured in recognition: ' + event.error;
}

// Microphone 2 ends
// **************************************************
// Microphone 3 starts

mic_num2.onclick = function(){
	recognition3.start();
}

recognition3.onresult = function(event){
	var last = event.results.length - 1;
	var number = event.results[last][0].transcript;
	num2.textContent = number;
	num2.style.fontSize = "x-large";
	num2.style.fontWeight = "600";
	num2_ASL.textContent = number;
	num2_ASL.style.fontFamily = "ASLfont";
	num2_ASL.style.fontSize = "xx-large";
	num2_ASL.style.fontWeight = "400";
}

recognition3.onspeechend = function() {
	recognition3.stop();
}

recognition3.onnomatch = function(){
	num2.textContent = 'Number not recognized.';
}

recognition3.onerror = function(event){
	num2.textContent = 'Error occured in recognition: ' + event.error;
}

// Microphone 3 ends

// Calculation starts
cal.onclick = function(){
	if (oper.textContent === '+'){
		ans.textContent = parseInt(num1.textContent) + parseInt(num2.textContent)
	}
	else if (oper.textContent === '-'){
		ans.textContent = parseInt(num1.textContent) - parseInt(num2.textContent)	
	}
	else if (oper.textContent === '*'){
		ans.textContent = parseInt(num1.textContent) * parseInt(num2.textContent)	
	}
	else if (oper.textContent === '/'){
		ans.textContent = parseInt(num1.textContent) / parseInt(num2.textContent)
	}

	ans.style.fontSize = "xx-large";
	ans.style.fontWeight = "900";
	ans.style.color = "#2962ff";
	ans.style.fontFamily = "'Fira Sans', sans-serif";
	ans_ASL.textContent = ans.textContent
	ans_ASL.style.fontSize = "xx-large";
	ans_ASL.style.fontWeight = "500";
	ans_ASL.style.color = "#2962ff";
	ans_ASL.style.fontFamily = "ASLfont";
}

// Calculation ends