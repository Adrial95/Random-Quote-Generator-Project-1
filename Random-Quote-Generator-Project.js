/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//below this comment is the variables used to store data for the variables//
var red;
var green;
var blue;
var colors;
var randomQuote;
var getQuote;
var randomNumber = 0;
var message = '';

/*** 
 * `below this comment are arrays with objects that hold the quotes that will be displayed randomly// 
***/
var quotes = [
{quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
source: '  Nelson Mandela',
citation: 'https://blog.hubspot.com/sales/famous-quotes',
year: 1995,
},

{quote:'The way to get started is to quit talking and begin doing.',
source: ' Walt Disney',
citation: 'https://blog.hubspot.com/sales/famous-quotes',
year: 1985,
},

 {quote: 'Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma.',
  source: ' steve Jobs',
  citation: 'https://blog.hubspot.com/sales/famous-quotes',
  year: 2010,
},

{quote: 'If life were predictable it would cease to be life, and be without flavor.',
  source: ' Eleanor Roosevelt',
  citation: 'https://blog.hubspot.com/sales/famous-quotes',
},

{ quote: 'If you look at what you have in life, youll always have more. If you look at what you dont have in life, youll never have enough.',
  source: ' Oprah Winfrey',
  citation: 'https://blog.hubspot.com/sales/famous-quotes',
}

]


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));

return quotes[randomNumber];
}

//the function bellow generates a random color everytime a new quote loads//

function getRandomColor () {
var red = Math.floor(Math.random() * 256);
var green = Math.floor(Math.random() * 256);
var blue = Math.floor(Math.random() * 256);
var colors = `rgb(${red},${green}, ${blue})`;
return document.body.style.background = colors;

};

/***
 * `printQuote` function
***/
function printQuote() {

  const quote = getRandomQuote();
let html='';

if (quote.citation) {
  html+=`<span class="citation">${quote.citation}</span>`;
}
if (quotes.source) {
  html+=`<span class="source">${quote.source}</span>`;
}
if (quotes.year) {
  html+=`<span class="source">${quote.year}</span>`;
}

html=`<p class="quote">${quote.quote}</p>`;
    html+=`<p class="source">${quote.source}</p>`;
    html+= `<p class="citation">${quote.citation}<p/>`;
    html+= `<p class="citation">${quote.year}<p/>`;

    html+='</p>';
    document.getElementById('quote-box').innerHTML = html;
};



/***
 * click event listener for the print quote button
 * click event listener for the get a random color button
 * the window.setInterval changes the quotes automatically every 6 seconds
 * 
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('load-quote').addEventListener('click', getRandomColor, false);
window.setInterval(printQuote, 6000);
