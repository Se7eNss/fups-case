import React from 'react'
import Slider from 'react-slick'
import PagerElement from '../../../components/pagerElement/PagerElement'
import { useFetchExpenses } from '../../../hooks/useFetchExpenses'
import styles from './Pager.module.scss'


const Pager = () => {
    const {data}= useFetchExpenses()
    
    const settings = {
        dots: true,
        infinite: false,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        rows: 3,
        dotsClass: styles.custom__dots,
        customPaging: (i:number )=> (
           <button className={styles.dot}>  {i + 1}</button>
          )
      };
    return (
        <div className={styles.pager}>
            <div className={styles.pager__header}>
                <h5 className={styles.pager__header__title}>HESAP HAREKETLERİ</h5>
                <div className={styles.pager__header__link}>
                    <span className={styles.pager__header__link__text}>Harcama Analizi</span>
                    <img src="/assets/icons/icon-20-helper-arrow-right.svg" alt="right" />
                </div>
            </div>
            <div className={styles.pager__wrapper}>
            <Slider {...settings}>
                {data?.map(expense => 
                <PagerElement key={expense.title} icon={expense.icon} title={expense.title} account={expense.account} amount={expense.amount} time={expense.time} color={expense.color} />
                )}
            </Slider>    
            </div>


        </div>
    )
}

export default Pager