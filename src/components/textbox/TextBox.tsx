import React, { useState } from 'react'
import styles from './TextBox.module.scss'

interface TextBoxProps {
  isPassword: boolean,
  name: string,
  placeHolder: string,
  setValue:(e:string)=>void
}

const TextBox = ({setValue, isPassword, name, placeHolder }: TextBoxProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  return (
      <div className={styles.textbox}>
        <input onChange={e=>setValue(e.target.value)} required className={styles.textbox__input} type={isPassword ? showPassword ? 'text' : 'password':'text'} placeholder=' ' />
        <label className={styles.textbox__label} htmlFor="textbox__input">{placeHolder}</label>
        {isPassword && <span onClick={()=>setShowPassword(!showPassword)} className={styles.textbox__icon}><img src="/assets/icons/icon-20-helper-hint-hide.svg" alt="" /></span>}
      </div>

  )
}

export default TextBox