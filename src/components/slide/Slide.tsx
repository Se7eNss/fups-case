import React from 'react'
import styles from './Slide.module.scss'

//parabirimleri için endpoint//https://evds2.tcmb.gov.tr/service/evds/series=TP.DK.USD.A-TP.DK.EUR.A-TP.DK.CHF.A-TP.DK.GBP.A-TP.DK.JPY.A&startDate=06-10-2022&endDate=06-10-2022&frequency=2&key=pzl0bde5dl&type=json

const Slide = () => {
  return (
    <div className={styles.slide}>
        <img className={styles.slide__img} src="/assets/images/home/image-banner-showcase-01.png" alt="" />
        <div className={styles.slide__info}>
          <h5 className={styles.slide__info__header}>TURKCELL KAMPANYASI</h5>
          <p className={styles.slide__info__text}>Fatura ödemelerinizde her ay 10 TL kazan dilediğince harca.</p>
        </div>
        <img className={styles.slide__icon} src="/assets/icons/icon-12-general-right.svg" alt="right" />
    </div>
  )
}

export default Slide