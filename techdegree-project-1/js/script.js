/*
an app that displays random famous quotes each time a button is clicked
Joseph Groark 2017
Based on Code from Treehouse Island
*/

//this is an array of objects to hold data named quotes
var quotes = [
{
quote: "You miss 100% of the shots you don’t take.",
source: "Wayne Gretzky",
year: 1991,
tags: "Sports",
},

{
quote: "Life isn’t about getting and having, it’s about giving and being.",
source: "Kevin Kruse",
citation: "Twitter",
year: 2015,
tags: "Spirtual",
},

{
quote: "An unexamined life is not worth living.",
source: "Socrates",
citation: "Dialogues",
tags: "Career",
},

{
// removed unknown for year
quote: "The mind is everything. What you think you become",
source: "Buddha",
citation: "Majjhima Nikaya 19",
tags: "Spirtual",
},

{
quote: "The best time to plant a tree was 20 years ago. The second best time is now",
source: "Chinese Proverb",
tags: "Advice",
},

{
quote: "The best revenge is massive success",
source: "Frank Sinatra",
citation: "Playboy Magazine",
},

{
quote: "Your time is limited, so don’t waste it living someone else’s life.",
source: "Steve Jobs",
citation: "Jobs",
year: 2006,
tags: "Career",
},

{
quote: "Either you run the day, or the day runs you.",
source: "Jim Rohn",
citation: "The Art of Exceptional Living",
year: 1993,
tags: "Career",
},

{
quote: "Life is 10% what happens to me and 90% of how I react to it",
source: "Charles Swindoll",
citation: "The Grace Awakening",
year: 2006,
tags: "Advice",
},
]

// selects a RANDOM quote from the object array and returns it
function getRandomQuote(){
  var randomNumber = Math.floor( Math.random() * quotes.length );
  return quotes[randomNumber];
}

//calls ​getRandomQuote ​& stores objects & propagate to div box
function printQuote(){
  var quoteBox = document.getElementById("quote-box");
  var printRandomObject = getRandomQuote();
  var quote = printRandomObject.quote;
  var source = printRandomObject.source;
  var citation = printRandomObject.citation;
  var year = printRandomObject.year;
  var tags = printRandomObject.tags;

//loop though and set tagLoop as string
  var tagsLoop = "Tags:";
  for (var i=0; i<tags.length; i++){
   tagsLoop += " " + tags[i];
}

//​​string ​containing ​properties ​of ​the ​quote object
  var quoteObject = "";
    quoteObject += "<p class='quote'>" + quote + "</p>";
    quoteObject += "<p class='source'>" + source;

//conditional if defined
  if (citation !== undefined){
    quoteObject += "<span class='citation'>" + citation + "</span>";}
  if (year !== undefined)
    {quoteObject += "<span class='year'>" + year + "</span>";}
  if (tags !== undefined)
    {quoteObject += "<br /><span class='tags'>" + tagsLoop + "</span>";}
  quoteObject += "</p>";
  quoteBox.innerHTML = quoteObject;
}

//randomly changes the background color of the page when quotes change.
function randomBackgroundColor() {
  var red;
  var green;
  var blue;
  var rgbColor;
  red = Math.floor(Math.random()*256);
  green = Math.floor(Math.random()*256);
  blue = Math.floor(Math.random()*256);
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  document.body.style.backgroundColor = rgbColor;
}

//setInterval() delay 7's reruns color and print func
function changeQuote () {
  window.setInterval(function () {
    printQuote();
    randomBackgroundColor();
  }, 7000);
}
changeQuote();
printQuote();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" and "generateBackgroundColor" functions are called
document.getElementById('loadQuote').addEventListener("click", function () {
    printQuote();
    randomBackgroundColor();
}, false);
