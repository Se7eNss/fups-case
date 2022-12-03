import React from 'react'
import styles from './Info.module.scss'


const Info = () => {
  return (
    <section className={styles.info__container}>
        <div className={styles.info__wrapper}>
            <h2 className={styles.info__wrapper__header}>Nasıl giriş yaparım?</h2>
            <div className={styles.info__wrapper__info}>
                <span className={styles.icon}><img src="/assets/icons/icon-20-general-mobile.svg" alt="mobile" /></span>
                <p className={styles.text}>Telefonunuzdan Fups uygulamasını açın.</p>
            </div>
            <div className={styles.info__wrapper__info}>
                <span className={styles.icon}><img src="/assets/icons/icon-20-general-personn.svg" alt="mobile" /></span>
                <p className={styles.text}>Profil fotoğrafınızdaki <br /> QR ikonuna basın.</p>
            </div>
            <div className={styles.info__wrapper__info}>
                <span className={styles.icon}><img src="/assets/icons/icon-20-general-identify.svg" alt="mobile" /></span>
                <p className={styles.text}>QR Kodu okutarak internet şubeye giriş yapabilirsiniz.</p>
            </div>
        </div>
        <div className={styles.image__wrapper}>
            <img src="/assets/images/login/image-login-01-qr.png" alt="login"  />
        </div>
    </section>
  )
}

export default Info