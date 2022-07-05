const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#author");
const buttonNew  = document.querySelector("#new-quote");
const buttonTwitter  = document.querySelector("#twitter");


const getQuote = async () => {
  const apiURL = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiURL);
    apiQuotes = await response.json();
    let rand = Math.floor(Math.random() * apiQuotes.length)
    let quote = apiQuotes[rand];
    return quote;
  } catch (err) {
      console.log(err);
  }
}

const newQuote = () => {
    getQuote().then(data => {
    if (!data.author) {
      data.author = "unbekannt";
    }
    if (data.text.length > 100) {
      quoteText.classList.add('long-quote');
    } else {
      quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = data.text;
    authorText.textContent = data.author;
  });
}

function tweetQuote() {
  const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterURL, '_blank');
}

buttonTwitter.addEventListener("click", () => {
  tweetQuote();
});

buttonNew.addEventListener("click", () => {
    newQuote();
});

newQuote();
