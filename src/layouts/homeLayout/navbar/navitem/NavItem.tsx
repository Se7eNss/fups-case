import React from 'react'
import styles from './NavItem.module.scss'

interface NavItemProps {
    isDropdown: boolean,
    title: string,
    icon: string
}

const NavItem = ({ isDropdown, title, icon }: NavItemProps) => {
    return (
        <>
            <li className={styles.navItem}>
                <img src={`/assets/icons/${icon}.svg`} alt={title} />
                <p className={styles.navItem__text}>{title}</p>

                {isDropdown &&
                    <ul className={styles.navItem__dropdown}>
                        <li className={styles.navItem__dropdown__item}>Menu 1</li>
                        <li className={styles.navItem__dropdown__item}>Menu 2</li>
                        <li className={styles.navItem__dropdown__item}>Menu 3</li>
                        <li className={styles.navItem__dropdown__item}>Menu 4</li>
                        <li className={styles.navItem__dropdown__item}>Menu 5</li>
                        <li className={styles.navItem__dropdown__item}>Menu 6</li>
                        <li className={styles.navItem__dropdown__item}>Menu 7</li>
                    </ul>
                }
            </li>

        </>

    )
}

export default NavItem