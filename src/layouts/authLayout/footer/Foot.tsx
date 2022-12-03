import React from 'react'
import styles from './Foot.module.scss'

const Foot = () => {
  return (
    <div className={styles.footer}>
        <img className={styles.footer__img} src="/assets//images/login/image-register-01.svg" alt="user" />
    </div>
  )
}

export default Foot