import { EVDS_API, EVDS_KEY } from './../config';
import moment from 'moment';
import { useEffect, useState } from 'react';
import axios from 'axios';


export  const useFetchEvdsMoney = () => {
        const [data, setData] = useState(null);
        const [error, setError] = useState("");

        const date = new Date()
        const today= moment(date).format('DD-MM-YYYY')

        

        // const yesterday = moment().add(-1, 'days').format('DD-MM-YYYY');
        const endPoint =`${EVDS_API}/series=TP.DK.USD.A.YTL-TP.DK.EUR.A-TP.DK.GBP.A&startDate=${today}&endDate=${today}&frequency=2&formulas=1-1-1-1&key=${EVDS_KEY}&type=json`
        
        useEffect(() => {
            (async () => {
              try {
                const response = await axios.get(endPoint);
                
                setData(response.data);
              } catch (error:any) {
                setError(error.message);
                console.log(error.message)
              }
            })();
          // eslint-disable-next-line react-hooks/exhaustive-deps
          }, []);
       
       
          return { data, error };
        //https://evds2.tcmb.gov.tr/service/evds/series=TP.DK.USD.A-TP.DK.EUR.A-TP.DK.GBP.A-TP.MK.KUL.YTL&startDate=01-11-2022&endDate=07-11-2022&frequency=1&formulas=1-1-1-1&key=pzl0bde5dl&type=json
        
}

//ALTINDA FREKANSLAR AYLIK OLARAK BELİRLENMİŞ