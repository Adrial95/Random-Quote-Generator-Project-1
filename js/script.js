/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//below this comment is the variables used to store data from the functions//

var randomQuote;
var quote;
var randomNumber;
/*** 
 * `below this comment are arrays with objects that hold the quotes that will be displayed randomly// 
***/
var quotes = [
{quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
source: ' - Nelson Mandela' },

{quote:'The way to get started is to quit talking and begin doing.',
source: '- Walt Disney'},

{quote: 'Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma.',
  source: '- steve Jobs'},

{quote: 'If life were predictable it would cease to be life, and be without flavor.',
  source: '- Eleanor Roosevelt'},

{quote: 'If you look at what you have in life, youll always have more. If you look at what you dont have in life, youll never have enough.',
  source: '- Oprah Winfrey'}
]


/***
 * `getRandomQuote` function
***/
function getRandomQuote () {
var randomNumber = math.floor(math.random() * (quotes.length));
for (var i = 0; i < quotes.length; i += 1) {

}
};



/***
 * `printQuote` function
***/
function printQuote (quote) {
var outputDiv = document.getElementById ('output');
outputDiv.innerHTML = quotes[0][i];
while (true) {
if (search === null) {
break;
}
}
};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);