import React from 'react'
import Currency from '../../../components/currency/Currency'
import { useFetchEvdsGold, useFetchEvdsMoney } from '../../../hooks/useFetchEvds'
import styles from './CurrencyTab.module.scss'

const CurrencyTab = () => {
   const dataMoney = useFetchEvdsMoney().newData
   const dataGold = useFetchEvdsGold().newData
  const data = dataMoney.concat(dataGold);
  console.log(data)
  return (
    <div className={styles.currencyTab}>
      {data.map(d=> <Currency key={d.title} icon={d.icon} title={d.title} rise={d.rise} curr={d.curr} color={d.color} />)}
        
      
    </div>
  )
}

export default CurrencyTab