import React from 'react'
import LoginForm from '../../sections/login/LoginForm'
import styles from './Login.module.scss'

const Login = () => {
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formContainer__header}>Kullanıcı Girişi</h1>
      <p className={styles.formContainer__text}>Ad soyad ve şifren ile Fups hesabına giriş yapabilirsin.</p>
      <LoginForm/>
    </div>
  )
}

export default Login