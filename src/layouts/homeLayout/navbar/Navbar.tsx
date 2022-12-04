import React from 'react'
import styles from './Navbar.module.scss'
import NavItem from './navitem/NavItem'
interface NavItemType{
    isDropdown:boolean,
    title:string,
    icon:string,
    link:string
}

const NavOption:NavItemType[] = [
    {
        isDropdown:true,
        title:'Hesaplar',
        icon:'icon-36-navigation-account-filled',
        link:'#'
    },
    {
        isDropdown:false,
        title:'Kartlar',
        icon:'icon-36-navigation-card-stroke',
        link:'#'
    },
    {
        isDropdown:false,
        title:'İşlemler',
        icon:'icon-36-navigation-function-stroke',
        link:'#'
    },
    {
        isDropdown:false,
        title:'Kampanyalar',
        icon:'icon-36-navigation-campaigns-filled',
        link:'#'
    }
]


const Navbar = () => {
    
  return (
    <nav className={styles.navbar}>
        <div className={styles.navbar__nav}>
        <img src="/assets/images/home/group-40.svg" alt="" />
        <ul className={styles.navbar__nav__list}>
            {NavOption.map((nav:NavItemType)=>
                 <NavItem isDropdown={nav.isDropdown} title={nav.title} icon={nav.icon}/>
            )}
               
        </ul>
        </div>
         
        <div className={styles.navbar__profile}>
                sasa
        </div>
    </nav>
  )
}

export default Navbar