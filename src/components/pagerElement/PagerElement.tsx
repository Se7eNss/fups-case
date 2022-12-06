import React from 'react'
import styles from './PagerElement.module.scss'

interface PagerElementType {
    icon:string,
    title:string,
    account:string,
    amount:string,
    time:string,
    color:string
}

const PagerElement = ({icon,title,account,amount,time,color}:PagerElementType) => {
    return (
        <div className={styles.pagerElement}>
            <div className={styles.pagerElement__leftSide}>
                <div style={{background:`${color}`}} className={`${styles.pagerElement__leftSide__icon} `}>
                    <img src={`/assets/icons/${icon}.svg`} alt={title} />
                </div>
                <div className={styles.pagerElement__leftSide__info}>
                    <h5 className={styles.pagerElement__header}>{title}</h5>
                    <p className={styles.pagerElement__text}>{account}</p>
                </div>
            </div>
            <div className={styles.pagerElement__rightSide}>
                <h5 className={`${styles.pagerElement__header} ${color ==='#26bf66' && styles.income} `}>{amount}</h5>
                <p className={styles.pagerElement__text}>{time}</p>
            </div>
        </div>
    )
}

export default PagerElement