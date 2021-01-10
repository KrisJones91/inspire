export default class Quote {
    constructor(data) {
        this.url = data.quote.url
        this.quote = data.quote.body
        this.author = data.quote.author
    }


    get Template() {
        return /*html*/`
        <div class="divQuote">
            <p class="quoteBody">"${this.quote}"</p>
        </div>
        <div class="author">
            <p>- ${this.author}</p>
        </div>
        
        `
    }
}