import React from 'react'
import styles from './Currency.module.scss'

const Currency = () => {
  return (
    <div className={styles.currency}>
        <div className={styles.currency__infoWrapper}>
            <img className={styles.currency__infoWrapper__icon} src="/assets/icons/icon-36-thumb-dollar.svg" alt="dollar" />
            <div className={styles.currency__infoWrapper__info}>
                <h5 className={styles.currency__infoWrapper__info__title}>sds </h5>
                <p className={styles.currency__infoWrapper__info__text}> sds</p>
            </div>
        </div>
        <div className={styles.currency__rateWrapper}>
            <h2 className={styles.currency__rateWrapper__rate}> 122344 </h2>
        </div>
    </div>
  )
}

export default Currency