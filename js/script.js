/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

var red;
var green;
var blue;
var rgbColor;



var quotes = [
  {
    quote: "The highest human act is to inspire.", source: "Nipsey Hussle", citation: "Twitter", year: "2016"
  },
  {
    quote: "Board man gets paid.", source: "Kawhi Leonard" 
  }, 
  {
    quote: "Live your life like you’re the hero in your own movie.", source: "Joe Rogan"
  },
  {
    quote: "Science is a way of thinking much more than it is a body of knowledge.", source: "Carl Sagan"
  }, 
  {
    quote: "If you get to my age in life and nobody thinks well of you, I don’t care how big your bank account is, your life is a disaster.", source: "Warren Buffett"
  }
];


/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function bgColorGenerator() {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  return rgbColor;
}


function printQuote() {
 var quotes = getRandomQuote();
 var message = '';
 var outputDiv = document.getElementById('quote-box');
 message += '<p class="quote">' + quotes.quote + '</p>';
 message += '<p class="source">' + quotes.source; 
   if (quotes.citation) {
    message += '<span class="citation">' + quotes.citation + '</span>';
   } else {
     message += '';
   }
   if (quotes.year) {
    message += '<span class="year">' + quotes.year + '</span></p>';
   } else {
     message += '';
   }
outputDiv.innerHTML = message;

bgColorGenerator();

document.getElementById('main').style.backgroundColor = bgColorGenerator();
}

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

setInterval(printQuote, 5000);

// Remember to delete the comments that came with this file, and replace them with your own code comments.