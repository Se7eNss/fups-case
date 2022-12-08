import React from 'react'
import Currency from '../../../components/currency/Currency'
import { useFetchCurrency } from '../../../hooks/useFetchCurrency'
import styles from './CurrencyTab.module.scss'

const CurrencyTab = () => {
   const{newData}=useFetchCurrency()
  return (
    <div className={styles.currencyTab}>
      {newData.map(d=> <Currency key={d.title} icon={d.icon} title={d.title} change={d.change} curr={d.curr} color={d.color} />)}
    </div>
  )
}

export default CurrencyTab