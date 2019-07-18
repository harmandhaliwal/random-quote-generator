/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

var red;
var green;
var blue;
var rgbColor;


// Array that holds objects containing multiple properties related to the quote
var quotes = [
  {
    quote: "The highest human act is to inspire.", source: "Nipsey Hussle", citation: "Twitter", year: "2016", tags: "Inspiration"
  },
  {
    quote: "Board man gets paid.", source: "Kawhi Leonard", citation: "", year: "", tags: "Sports"
  },
  {
    quote: "Live your life like you’re the hero in your own movie.", source: "Joe Rogan", citation: "", year: "", tags: "Inspiration"
  },
  {
    quote: "Science is a way of thinking much more than it is a body of knowledge.", source: "Carl Sagan", citation: "", year: "", tags: "Science"
  },
  {
    quote: "If you get to my age in life and nobody thinks well of you, I don’t care how big your bank account is, your life is a disaster.", source: "Warren Buffett", citation: "", year: "", tags: "Wisdom"
  }
];


// Returns a random object from the quotes array
function getRandomQuote() {
  var randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
}


// Returns a random rgb color value that is stored in the rgbColor variable
function bgColorGenerator() {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  return rgbColor;
}


// Calls the getRandomQuote function and prints the random quote to the page
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
  if (quotes.tags) {
    message += '<h3>' + quotes.tags + '</h3>';
  } else {
    message += '';
  }
  outputDiv.innerHTML = message;

  // Generates a random color
  bgColorGenerator();

  // Updates background with random color
  document.getElementById('main').style.backgroundColor = bgColorGenerator();
}


// Event listener that invokes the printQuote function when the "Show another quote" button is clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Auto-refreshes the quote and selects a new one every 12 seconds
setInterval(printQuote, 12000);

