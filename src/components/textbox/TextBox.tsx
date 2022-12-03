import React, { useState } from 'react'
import { Input } from 'antd'
import styles from './TextBox.module.scss'

interface TextBoxProps {
  isPassword: boolean,
  name: string,
  placeHolder: string,
}

const TextBox = ({ isPassword, name, placeHolder }: TextBoxProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(true)
  return (
    isPassword ? (
      <div className={styles.label}>
        <input
          className={styles.label__textbox}
          type={showPassword ? 'password' : 'text'}
          name={name}
          placeholder={placeHolder}
        />
        {/* <span className={styles.label__placeholder}>{placeHolder}</span> */}
        <span onClick={()=>setShowPassword(!showPassword)} className={styles.label__span}> <img src="/assets/icons/icon-20-helper-hint-hide.svg" /></span>
      </div>

    ) :
      (
        <label className={styles.label}>
        <input
          className={styles.label__textbox}
          type={'text'}
          name={name}
          placeholder={placeHolder}
        /> 
      </label>
      )

  )
}

export default TextBox