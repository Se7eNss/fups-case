import React from 'react'
import styles from './LoginForm.module.scss'
import Button from '../../components/button/Button'
import TextBox from '../../components/textbox/TextBox'

const LoginForm = () => {

  const login= (data:any) =>{
    console.log(data)
  }

  return (
    <form className={styles.form} onSubmit={login}>
        <TextBox isPassword={false} name={'username'} placeHolder={'Kullanıcı Adı'}  />
        <TextBox isPassword={true} name={'password'} placeHolder={'Kullanıcı Adı'}  />
        <Button isSubmit={true} value={'Giriş Yap'} disabled={false}/>
    </form>
  )
}

export default LoginForm