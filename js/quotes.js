const quotes = [
  {
    quote : "01 아라차차아라차차아라차차",
    author : "01 아라차차"
  },
  {
    quote : "02 아라차차아라차차아라차차",
    author : "02 아라차차"
  },
  {
    quote : "03 아라차차아라차차아라차차",
    author : "03 아라차차"
  },
  {
    quote : "04 아라차차아라차차아라차차",
    author : "04 아라차차"
  },
  {
    quote : "05 아라차차아라차차아라차차",
    author : "05 아라차차"
  },
  {
    quote : "06 아라차차아라차차아라차차",
    author : "06 아라차차"
  },
  {
    quote : "07 아라차차아라차차아라차차",
    author : "07 아라차차"
  },
  {
    quote : "08 아라차차아라차차아라차차",
    author : "08 아라차차"
  },
  {
    quote : "09 아라차차아라차차아라차차",
    author : "09 아라차차"
  }, 
  {
    quote : "10 아라차차아라차차아라차차",
    author : "10 아라차차"
  }, 
]

const todayQuote = quotes[parseInt(Math.random()*quotes.length)]
const quoteSpan = document.querySelector("#quote span:first-child");
const authorSpan = document.querySelector("#quote span:last-child");

quoteSpan.innerText = todayQuote.quote;
authorSpan.innerText = todayQuote.author;
