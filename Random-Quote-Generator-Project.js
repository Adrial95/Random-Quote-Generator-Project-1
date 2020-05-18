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
},

{quote:'The way to get started is to quit talking and begin doing.',
source: ' Walt Disney',
citation: 'https://blog.hubspot.com/sales/famous-quotes',
},

 {quote: 'Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma.',
  source: ' steve Jobs',
  citation: 'https://blog.hubspot.com/sales/famous-quotes',
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
var red = math.floor(math.random() * 256);
var green = math.floor(math.random() * 256);
var blue = math.floor(math.random() * 256);
var colors = 'rgb(' + red +','+ green +', '+ blue +')';
return getRandomColor();
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

html=`<p class="quote">${quote.quote}</p>`;
    html+=`<p class="source">${quote.source}</p>`;
    html+= `<p class="citation">${quote.citation}<p/>`;

    html+='</p>';
    document.getElementById('quote-box').innerHTML = html;
};



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
