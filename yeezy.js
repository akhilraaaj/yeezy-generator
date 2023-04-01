const generateQuote = () => {
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => dailyQuote(data))
}

const dailyQuote = (quote) => {
    const blockQuote = document.getElementById("daily-quote");
    blockQuote.classList.add('text-style');
    blockQuote.innerHTML = quote.quote;
}
