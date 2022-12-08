import React, { useState } from 'react'
import styles from './LoginForm.module.scss'
import Button from '../../components/button/Button'
import TextBox from '../../components/textbox/TextBox'
import ComboBox from '../../components/combobox/ComboBox'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import useLoading from '../../hooks/useLoading'

const LoginForm = () => {
  const {login} = useAuth()
  const {setIsLoading}=useLoading()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [selection, setSelection] = useState<string|null>('')
  const [isEmpty, setEmpty] =useState<boolean>(false)
  const navigate = useNavigate()

  const submit= async (event:any) =>{
      event?.preventDefault()
      setEmpty(true)
      if(selection !== '' && selection !== null){
          setIsLoading(true)
          await new Promise((resolve) => setTimeout(resolve, 2000));
          setIsLoading(false)
          login({userType:selection,username,password})
          event.target.reset();
          navigate('/')
      }
    
  }
  
  return (
    <form className={styles.form} onSubmit={submit}>
        <ComboBox required={isEmpty} setSelection={setSelection} placeholder={'Kullanıcı Tipi'} options= {['Standart Hesap','Onaylı Hesap','Premium Hesap']}/>
        <TextBox setValue={setUsername} isPassword={false} name={'username'} placeHolder={'Kullanıcı Adı'}  />
        <TextBox setValue={setPassword} isPassword={true} name={'password'} placeHolder={'Şifre'}  />
        <div className={styles.form__btngroup}>
            <p className={styles.form__btngroup__link}>Şifremi Unuttum</p>
            <Button isSubmit={true} value={'GİRİŞ YAP'} disabled={false}/>
        </div>
       
    </form>
  )
}

export default LoginForm