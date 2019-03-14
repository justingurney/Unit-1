var quotes = [
    {
        quote: "You can’t climb the ladder of success with your hands in your pockets",
        source: "Arnold Schwarzenegger",
        date: "New York, 5th July 1986",
        tag: "Public Figure"


    },
    {
        quote: "The more we value things, the less we value ourselves.",
        source: "Bruce Lee",
        date: "8th July 1962",
        tag: "Actor"
    },
    {
        quote: "Just because you can’t see anything doesn’t mean you should shut your eyes", 
        source: "Ray Charles",
        date: "4th July 1970",
        tag: "Musician"
    },
    {
        quote: "The biggest coward of a man is to awaken the love of a woman without the intention of loving her",
        source: "Bob Marley",
        date: "2th July 1978",
        tag: "Artist "
    },
    {
        quote: "If you don’t have the mental capacity to be obsessed with what you’re trying to get… then you’re never gonna get it",
        source: "CT Fletcher",
        date: "Florida, 1th July 2000",
        tag: "Body Builder"
    },
    {
        quote: "You’ll find that life is still worthwhile, if you just smile",
        source: "Charlie Chaplin",
        date: "3th July 1929",
        tag: "Icon"

    }
];

/*
A function of 'getRandomQuote ', being passed the array of quotes.
Changes backgroun colour using the 'changeBackgroundColour' function.
Also the var 'quoteIndex' orders the quotes randomly.
A quote is then assigned to the randomQuote var and is then returned.
*/
function getRandomQuote(array){
    changeBackgroundColour();

    var quoteIndex= Math.floor(Math.random() * quotes.length)
  
    for(var o = 0; o < array.length; o++){

        var randomQuote = array[quoteIndex];
    }
    return randomQuote;
}

/*
 Using 'var color'('rgb') to change background colour through the function 'changeBackgoundColour'.
 */
function changeBackgroundColour() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var color = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById('background-color').style.background = color;
}

/*
The function of 'printQuote', locates the array of random 'quotes' through 'var result', then updates the quote on the page.
*/
function printQuote(message) {
    var result = getRandomQuote(quotes);
    document.getElementById('quote-box').innerHTML = '<p class="quote">' + result.quote + '</p>' + '<p class="source">' + result.source + '<span class="citation">' + result.tag + '</span><span class="year">' + result.date + '</span></p>';
};

/*
This links the app.js botton 'document.' process to the botton in the html by 'loadQuotes'.
*/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/*
Change quote every 10 seconds
*/
setInterval(function () {
    printQuote();
}, 10000);



