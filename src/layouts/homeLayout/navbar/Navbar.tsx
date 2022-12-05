import React, { useEffect, useRef, useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import styles from './Navbar.module.scss'
import NavItem from './navitem/NavItem'
interface NavItemType {
    isDropdown: boolean,
    title: string,
    icon: string,
    link: string,
    dropItems: { title: string, link: string }[] | null,
}

const dropItems = [{ title: 'Menu 1', link: '#' }, { title: 'Menu 2', link: '#' }, { title: 'Menu 3', link: '#' }, { title: 'Menu 4', link: '#' }, { title: 'Menu 5', link: '#' }, { title: 'Menu 6', link: '#' }, { title: 'Menu 7', link: '#' }]

const NavOption: NavItemType[] = [
    {
        isDropdown: true,
        title: 'Hesaplar',
        icon: 'icon-36-navigation-account-filled',
        link: '#',
        dropItems: dropItems
    },
    {
        isDropdown: false,
        title: 'Kartlar',
        icon: 'icon-36-navigation-card-stroke',
        link: '#',
        dropItems: null
    },
    {
        isDropdown: false,
        title: 'İşlemler',
        icon: 'icon-36-navigation-function-stroke',
        link: '#',
        dropItems: null
    },
    {
        isDropdown: false,
        title: 'Kampanyalar',
        icon: 'icon-36-navigation-campaigns-filled',
        link: '#',
        dropItems: null
    }
]


const Navbar = () => {
    const { user } = useAuth()
    const [nav, setNav] = useState(false)

    const{width}=useWindowDimensions()
    
    useEffect(() => {
        console.log('errr');
        if(width>1100)setNav(true)
        if(width<1100)setNav(false)
    }, [width])
    

    const onClick=()=>{
            setNav(!nav)
    }

    return (
        <nav className={styles.navbar}>
            <img className={styles.navbar__img} src="/assets/images/home/group-40.svg" alt="logo" />
            {nav && 
                <div className={styles.navbar__nav}>
                <ul className={styles.navbar__nav__list}>
                    {NavOption.map((nav: NavItemType) =>
                        <NavItem key={nav.title} dropItems={nav.dropItems} isDropdown={nav.isDropdown} title={nav.title} icon={nav.icon} />
                    )}

                </ul>
                <div className={styles.navbar__nav__profile}>
                    <div className={styles.navbar__nav__profile__imgWrapper}>
                        <img src='/assets/images/home/avatar.png' alt="avatar" />
                        <span className={styles.navbar__nav__profile__imgWrapper__badge}>12</span>
                    </div>
                    <div className={styles.navbar__nav__profile__info}>
                        <p className={styles.navbar__nav__profile__info__username}>{user?.username}</p>
                        <p className={styles.navbar__nav__profile__info__type}>{user?.userType.slice(0, user?.userType.indexOf(' '))}</p>
                    </div>
                </div>

            </div>
            }
            
            <div onClick={onClick} className={styles.hamburger}>
                <svg viewBox="0 0 100 80" width="30" height="30">
                    <rect width="100" height="12" rx="8"></rect>
                    <rect y="30" width="100" height="12" rx="8"></rect>
                    <rect y="60" width="100" height="12" rx="8"></rect>
                </svg>
            </div>

        </nav>
    )
}

export default Navbar