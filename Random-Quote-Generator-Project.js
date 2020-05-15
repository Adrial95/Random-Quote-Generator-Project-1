/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//below this comment is the variables used to store data for the variables//
var red;
var green;
var blue;
var colors;
var randomQuote = 0;
var getQuote;
var randomNumber;
var message = '';

/*** 
 * `below this comment are arrays with objects that hold the quotes that will be displayed randomly// 
***/
var quotes = [
{quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
source: ' - Nelson Mandela',
citation: 'https://blog.hubspot.com/sales/famous-quotes',
},

{quote:'The way to get started is to quit talking and begin doing.',
source: '- Walt Disney',
citation: 'https://blog.hubspot.com/sales/famous-quotes',
},

 {quote: 'Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma.',
  source: '- steve Jobs',
  citation: 'https://blog.hubspot.com/sales/famous-quotes',
},

{quote: 'If life were predictable it would cease to be life, and be without flavor.',
  source: '- Eleanor Roosevelt',
  citation: 'https://blog.hubspot.com/sales/famous-quotes',
},

{ quote: 'If you look at what you have in life, youll always have more. If you look at what you dont have in life, youll never have enough.',
  source: '- Oprah Winfrey',
  citation: 'https://blog.hubspot.com/sales/famous-quotes',
}

]


/***
 * `getRandomQuote` function
***/
function getRandomQuote(arr) {
var randomNumber = math.floor(math.random() * (quotes.length));
listHTML = '</ol>';
for(var i = 0; i < arr.length;i += 1) {
istHTML += '<li>'  + arr[i] + '</li>';
}
listHTML = '</ol>';
return listHTML;
}

//the function bellow generates a random color everytime a new quote loads//

function getRandomColor () {
var red = math.floor(math.random() * 256);
var green = math.floor(math.random() * 256);
var blue = math.floor(math.random() * 256);
var colors = 'rgb(' + red +','+ green +', '+ blue +')';
return colors;
};

/***
 * `printQuote` function
***/
function printQuote(message) {
var outputDiv = document.getElementById('output');
outputDiv.innerHTML = message;


html=`<p class="quote">${quotes.quote}</p>`;
    html+=`<p class="source">${quotes.source}</p>`;
    html+= `<p class="citation">${quotes.citation}<p/>`;
};
while (true) {
    for (var i = 0; i < quotes.length; i += 1) {
        getQuote = quotes[i];
        console.log(message);
       var randomQuote =+ [i];
        
}
if (quotes.citation) {
  html+=`<span class="citation">${quotes.citation}</span>`;
}
if (quotes.source) {
  html+=`<span class="source">${quotes.source}</span>`;
  print(message);
  newFunction();
}
};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
