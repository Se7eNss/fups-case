import React from 'react'
import Currency from '../../../components/currency/Currency'
import { useFetchEvdsMoney } from '../../../hooks/useFetchEvds'
import styles from './CurrencyTab.module.scss'

const CurrencyTab = () => {
    console.log(useFetchEvdsMoney().error) 
  return (
    <div className={styles.currencyTab}>
        <Currency/>
        <Currency/>
        <Currency/>
        <Currency/>
    </div>
  )
}

export default CurrencyTab