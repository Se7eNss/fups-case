import { EVDS_API, EVDS_KEY } from './../config';
import moment from 'moment';
import { useEffect, useState } from 'react';
import axios from 'axios';


const dataForDaily ={
  "totalCount": 1,
  "items": [
      {
          "Tarih": "07-12-2022",
          "TP_DK_USD_A_YTL-1": "0.006984365765865379",
          "TP_DK_EUR_A-1": "-0.5401250279989303",
          "TP_DK_GBP_A-1": "-0.7867117551206377",
          "UNIXTIME": {
              "$numberLong": "1670360400"
          },
          "TP_DK_USD_A_YTL": null,
          "TP_DK_EUR_A": null,
          "TP_DK_GBP_A": null
      }
  ]
}


const dataToday ={
  "totalCount": 1,
  "items": [
      {
          "Tarih": "07-12-2022",
          "TP_DK_USD_A_YTL": "18.6143",
          "TP_DK_EUR_A": "19.5375",
          "TP_DK_GBP_A": "22.6496",
          "UNIXTIME": {
              "$numberLong": "1670360400"
          }
      }
  ]
}
const goldDaily={
  "totalCount": 1,
  "items": [
      {
          "Tarih": "2022-11",
          "TP_MK_KUL_YTL-1": "3.68442407988362",
          "UNIXTIME": {
              "$numberLong": "1667250000"
          },
          "TP_MK_KUL_YTL": null
      }
  ]
}
const goldData={
  "totalCount": 1,
  "items": [
      {
          "Tarih": "2022-11",
          "TP_MK_KUL_YTL": "1047.7",
          "UNIXTIME": {
              "$numberLong": "1667250000"
          }
      }
  ]
}


export  const useFetchEvdsMoney = () => {
        const [data, setData] = useState(null);
        const [error, setError] = useState("");

        const date = new Date()
        const today= moment(date).format('DD-MM-YYYY')

        

        // const yesterday = moment().add(-1, 'days').format('DD-MM-YYYY');
        const endPoint =`${EVDS_API}/series=TP.DK.USD.A.YTL-TP.DK.EUR.A-TP.DK.GBP.A&startDate=${today}&endDate=${today}&frequency=2&formulas=1-1-1-1&key=${EVDS_KEY}&type=json` //günlük kurlar artış
       //günlük kurlar // https://evds2.tcmb.gov.tr/service/evds/series=TP.DK.USD.A.YTL-TP.DK.EUR.A-TP.DK.GBP.A&startDate=07-12-2022&endDate=07-12-2022&frequency=2&key=pzl0bde5dl&type=json
        useEffect(() => {
            (async () => {
              try {
                const response = await axios.get(endPoint);
                
                setData(response.data);
              } catch (error:any) {
                setError(error.message);
                console.log(error)
              }
            })();
          // eslint-disable-next-line react-hooks/exhaustive-deps
          }, []);
          console.log(data)


        let newData: any[] = [];

        dataForDaily.items.map((d)=>{
            dataToday.items.map((c)=>{
              const dollar = {
                title:'DOLAR',
                rise:d['TP_DK_USD_A_YTL-1'],
                curr:c.TP_DK_USD_A_YTL,
                color:'#8066cc',
                icon:'icon-36-thumb-dollar'
               }
              const euro ={
                title:'EURO',
                rise:d['TP_DK_EUR_A-1'],
                curr:c.TP_DK_EUR_A,
                color:'#26bf66',
                icon:'icon-36-thumb-euro'           
             }
             const gbp = {
              title:'STERLİN',
              rise:d['TP_DK_GBP_A-1'],
              curr:c.TP_DK_GBP_A,
              color:'#155ed4',
              icon:'icon-36-thumb-sterlin'
             }

             newData.push(euro,dollar,gbp)
            })
            

        })
          return {newData, error };
        //https://evds2.tcmb.gov.tr/service/evds/series=TP.DK.USD.A-TP.DK.EUR.A-TP.DK.GBP.A-TP.MK.KUL.YTL&startDate=01-11-2022&endDate=07-11-2022&frequency=1&formulas=1-1-1-1&key=pzl0bde5dl&type=json
        
}

//ALTINDA FREKANSLAR AYLIK OLARAK BELİRLENMİŞ


export  const useFetchEvdsGold = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const date = new Date()
  const today= moment(date).format('DD-MM-YYYY')

  //altın aylık artış//https://evds2.tcmb.gov.tr/service/evds/series=TP.MK.KUL.YTL&startDate=07-11-2022&endDate=07-11-2022&type=json&key=pzl0bde5dl&frequency=1&formulas=1
  //altın aylık //https://evds2.tcmb.gov.tr/service/evds/series=TP.MK.KUL.YTL&startDate=07-11-2022&endDate=07-11-2022&type=json&key=pzl0bde5dl&frequency=1
  
  // const yesterday = moment().add(-1, 'days').format('DD-MM-YYYY');
  const endPoint =`${EVDS_API}/series=TP.MK.KUL.YTL&startDate=${today}&endDate=${today}&frequency=2&formulas=1&key=${EVDS_KEY}&type=json`
  
  // useEffect(() => {
  //     (async () => {
  //       try {
  //         const response = await axios.get(endPoint);
          
  //         setData(response.data);
  //       } catch (error:any) {
  //         setError(error.message);
  //         console.log(error)
  //       }
  //     })();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);
  //   console.log(data)


  let newData: any[] = [];

  goldDaily.items.map((d)=>{
     goldData.items.map((c)=>{
        const gold ={
          title:'GRAM ALTIN',
          rise:d['TP_MK_KUL_YTL-1'],
          curr:c.TP_MK_KUL_YTL,
          color:'#ffb44d',
          icon:'icon-36-thumb-gold'
       }

       newData.push(gold)
      })
      

  })
    return {newData, error };
  //https://evds2.tcmb.gov.tr/service/evds/series=TP.DK.USD.A-TP.DK.EUR.A-TP.DK.GBP.A-TP.MK.KUL.YTL&startDate=01-11-2022&endDate=07-11-2022&frequency=1&formulas=1-1-1-1&key=pzl0bde5dl&type=json
  
}