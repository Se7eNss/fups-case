import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { CURRENCY_API, CURRENCY_KEY, GOLD_API, GOLD_API_KEY } from "../config";


export interface CurrencyType {
    title: string,
    change: string  | undefined,
    curr: string | undefined,
    color: string,
    icon: string
}
export interface GetCurrencyType {
    USD: number,
    EUR: number,
    GBP: number
}
export interface GetChangeType {
    USD: {
        change_pct: number
    },
    EUR: {
        change_pct: number
    },
    GBP: {
        change_pct: number
    },
}
export interface GetGoldType {
    buying:number,
    changeRate:number
}




export const useFetchCurrency = () => {
    const [data, setData] = useState<GetCurrencyType | null>();
    const [change, setChange] = useState<GetChangeType | null>();
    const [gold, setGold] = useState<GetGoldType | null>()
    const [error, setError] = useState("");

    const date = new Date()
    const today = moment(date).format('YYYY-MM-DD')
    const yesterday = moment().add(-1, 'days').format('YYYY-MM-DD');


    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`${CURRENCY_API}/fluctuation&start_date=${yesterday}&end_date=${today}&base=TRY&symbols=USD,EUR,GBP`, {
                    headers: { 'apikey': CURRENCY_KEY }
                });
                setChange(response.data.rates);
                const responseCurr = await axios.get(`${CURRENCY_API}/latest?base=TRY&symbols=USD,EUR,GBP`, {
                    headers: { 'apikey': CURRENCY_KEY }
                });
                setData({USD:1/responseCurr.data.rates.USD,EUR:1/responseCurr.data.rates.EUR ,GBP:1/responseCurr.data.rates.GBP});
                const responseGold = await axios.get(`${GOLD_API}/getCurrencyDetails?code=gram-altin`,{headers:{'Authorization':GOLD_API_KEY}});
                setGold(responseGold.data.data[0])
                
            } catch (error: any) {
                setError(error.message);
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let newData: CurrencyType[] = []

    newData.push(
        {
            title: 'DOLAR',
            change: change?.USD.change_pct.toString(),
            curr:   data?.USD.toString(),
            color: '#8066cc',
            icon: 'icon-36-thumb-dollar'
        },
        {
            title: 'EURO',
            change: change?.EUR.change_pct.toString(),
            curr:   data?.EUR.toString(),
            color: '#26bf66',
            icon: 'icon-36-thumb-euro'
        },
        {
            title: 'STERLİN',
            change: change?.GBP.change_pct.toString(),
            curr:   data?.GBP.toString(),
            color: '#155ed4',
            icon: 'icon-36-thumb-sterlin'
        },
        {
            title: 'GRAM ALTIN',
            change: gold?.changeRate.toString(),
            curr: gold?.buying.toString(),
            color: '#ffb44d',
            icon: 'icon-36-thumb-gold'
        }
    )

    return { newData, error };


}