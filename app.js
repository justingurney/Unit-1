/**** 
 The array of quotes, with the assigned varibale "quotes". 
 ****/ 
var quotes = [
    {
        /**** 
        * Quote from Arnold Schwarzenegger about success.
        ****/ 
        quote: "You can’t climb the ladder of success with your hands in your pockets",
        source: "—Arnold Schwarzenegger",
        date: "-- New York, 5th July 1986"
    },
    {
        /**** 
        * Quote from Bruce Lee about self-value.
        ****/ 
        quote: "The more we value things, the less we value ourselves.",
        source: "—Bruce Lee",
        date: "--8th July 1962"
    },
    {
        /**** 
        * Quote from Ray Charles about having your eyes open.
        ****/ 
        quote: "Just because you can’t see anything doesn’t mean you should shut your eyes", 
        source: "—Ray Charles",
        date: "--4th July 1970"
    },
    {
        quote: "The biggest coward of a man is to awaken the love of a woman without the intention of loving her",
        source: "—Bob Marley",
        date: "--2th July 1978"
    },
    {
        /**** 
        * Quote from CT Fletcher about obsession.
        ****/ 
        quote: "If you don’t have the mental capacity to be obsessed with what you’re trying to get… then you’re never gonna get it",
        source: "—CT Fletcher",
        date: "--Florida, 1th July 2000"
    },
    {
        /**** 
        * Quote from  Charlie Chaplin about how to make life worthwhile.
        ****/ 
        quote: "You’ll find that life is still worthwhile, if you just smile",
        source: "—Charlie Chaplin",
        date: "--3th July 1929"
    }
];

/***
*  A function of 'getRandomQuote ', using the array of 'quotes' as the perimeter.
Within the brackets the 'let' var 'quoteIndex' random orders the quotes.
'var randomQuote ' holds 'let quoteIndex' and the 'for' loop, then the 'var randomQuote' is returned.
***/

function getRandomQuote(array){
    let quoteIndex= Math.floor(Math.random() * quotes.length)
  
    for(var o = 0; o < array.length; o++){

        var randomQuote = array[quoteIndex];
    }
    return randomQuote;
}

/***
 * The function of 'printQuote', locates the array of random 'quotes' through 'var result' .
 'var message' sorts out the process of display. 
 whilest using 'quote-box' id to link app.js functions to the html 'body'.
***/

function printQuote (message) {
    var result= getRandomQuote(quotes);
    var message= "<p class='quote'>" + result.quote + "</p>" + "<p class='source'>" + result.source + "</p>" + "<p class='date'>" + result.date + "</p>";
    document.getElementById('quote-box').innerHTML = message;
};

/***
* this links the app.js botton 'document.' process to the botton in the html by 'loadQuotes'.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);



