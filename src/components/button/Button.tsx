import React from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
    value:string,
    disabled:boolean,
    isSubmit:boolean
}


const Button = ({isSubmit,value,disabled}:ButtonProps) => {
  return (
    <button type={isSubmit? 'submit' : 'button'} disabled className={styles.button }>
        <span className={styles.span}>{value}</span>
    </button>
  )
}

export default Button