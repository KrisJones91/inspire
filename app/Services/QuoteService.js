import { ProxyState } from "../AppState.js";
import Quote from "../models/Quote.js";
import { api } from "./AxiosService.js";

//TODO create methods to retrieve data and update the State
class QuoteService {
    async getQuote() {
        let res = await api.get("quotes")
        console.log(res)
        //because only needing ONE quote.. also changed in APPState from Quote[] to Quote.
        ProxyState.quote = new Quote(res.data)
        console.log(res.data)
    }
}

const quoteService = new QuoteService();
export default quoteService;