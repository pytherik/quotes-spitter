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
    quoteText.textContent = data.text;
    authorText.textContent = data.author;
  });
}

buttonNew.addEventListener("click", () => {
    newQuote();
});

newQuote();
