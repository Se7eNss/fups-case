import React from 'react'
import styles from './Currency.module.scss'

interface CurrencyProps{
    icon:string,
    title:string,
    rise:string,
    curr:string,
    color:string
}

const Currency = ({icon,title,rise,curr,color}:CurrencyProps) => {
  return (
    <div className={styles.currency}>
        <div className={styles.currency__infoWrapper}>
            <img style={{background:color}} className={styles.currency__infoWrapper__icon} src={`/assets/icons/${icon}.svg`}  alt={title} />
            <div className={styles.currency__infoWrapper__info}>
                <h5 className={styles.currency__infoWrapper__info__title}>{title}</h5>
                <p className={styles.currency__infoWrapper__info__text}> {rise.substring(0,5)}</p>
            </div>
        </div>
        <div className={styles.currency__rateWrapper}>
            <h2 className={styles.currency__rateWrapper__rate}> {curr} </h2>
        </div>
    </div>
  )
}

export default Currency