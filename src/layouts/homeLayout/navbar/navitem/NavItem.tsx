import React from 'react'
import styles from './NavItem.module.scss'

interface NavItemProps {
    isDropdown: boolean,
    title: string,
    icon: string,
    dropItems:{title:string,link:string}[] | null,
}

const NavItem = ({ isDropdown, title, icon, dropItems }: NavItemProps) => {

    return (
        <>
            <li className={styles.navItem}>
                <img src={`/assets/icons/${icon}.svg`} alt={title} />
                <p className={styles.navItem__text}>{title}</p>

                {isDropdown &&
                    <ul className={styles.navItem__dropdown}>
                        {dropItems?.map(item =>(
                             <li key={item.title}  className={styles.navItem__dropdown__item }>{item.title}</li>
                        ))}
                                
                       
                            
                    </ul>
                }
            </li>

        </>

    )
}

export default NavItem