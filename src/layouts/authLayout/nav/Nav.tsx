import React from 'react'
import Button from '../../../components/button/Button'
import Logo from './Logo'
import styles from './Nav.module.scss'


const Nav = () => {
  return (
    <nav className={styles.nav}>
        <Logo/>
        <Button isSubmit={false} disabled={true} value='KAYIT OL'/>
    </nav>
    
  )
}

export default Nav