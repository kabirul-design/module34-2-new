function quotesNotes(){
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => console.log(data))
}
quotesNotes();

//Example 2 if no parameter then create arrow function
const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => addQuotes(data))
}
const addQuotes = (quote)=>{
    const quoteAdd = document.getElementById('quotes-note');
    // const genQuote = document.createElement('div');
    quoteAdd.innerText = (quote.quote);
    // quoteAdd.style.backgroundColor = 'blue';
    // quoteAdd.appendChild(genQuote);
}