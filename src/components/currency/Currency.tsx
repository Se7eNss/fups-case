import React from 'react'
import styles from './Currency.module.scss'

interface CurrencyProps{
    icon:string,
    title:string,
    change:string | undefined,
    curr:string | undefined,
    color:string
}

const Currency = ({icon,title,change,curr,color}:CurrencyProps) => {
  return (
    <div className={styles.currency}>
        <div className={styles.currency__infoWrapper}>
            <img style={{background:color}} className={styles.currency__infoWrapper__icon} src={`/assets/icons/${icon}.svg`}  alt={title} />
            <div className={styles.currency__infoWrapper__info}>
                <h5 className={styles.currency__infoWrapper__info__title}>{title}</h5>
                <p className={`${styles.currency__infoWrapper__info__text} ${change?.charAt(0) === '-' && styles.minus}`}> {change?.substring(0,5)}</p>
            </div>
        </div>
        <div className={styles.currency__rateWrapper}>
            <h2 className={styles.currency__rateWrapper__rate}> {curr?.substring(0,7)} </h2>
        </div>
    </div>
  )
}

export default Currency