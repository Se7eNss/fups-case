import React from 'react'
import Slider from 'react-slick'
import PagerElement from '../../../components/pagerElement/PagerElement'
import { useFetchExpenses } from '../../../hooks/useFetchExpenses'
import styles from './Pager.module.scss'


const expenses = [
    {
        icon: 'icon',
        title: 'Burger’s Lab',
        account: 'Aile Hesabım (Yasemin Pınar)',
        amount: '- ₺200,00',
        time: '2 saat önce',
        color:'#8066cc'
    },
    {
        icon: 'money',
        title: 'Gelen Transfer',
        account: 'Dolar Hesabım (Erman Karakaya)',
        amount: '$140,00',
        time: '6 saat önce',
        color:'#26bf66'
    },
    {
        icon: 'gold',
        title: 'Para Yükle',
        account: 'Altın Hesabım',
        amount: '2,00 gr',
        time: '12 saat önce',
        color:'#ffb44d'
    },
    {
        icon: 'icon',
        title: 'Burger’s Lab',
        account: 'Aile Hesabım (Yasemin Pınar)',
        amount: '- ₺200,00',
        time: '2 saat önce',
        color:'#8066cc'
    },
    {
        icon: 'money',
        title: 'Gelen Transfer',
        account: 'Dolar Hesabım (Erman Karakaya)',
        amount: '$140,00',
        time: '6 saat önce',
        color:'#26bf66'
    },
    {
        icon: 'gold',
        title: 'Para Yükle',
        account: 'Altın Hesabım',
        amount: '2,00 gr',
        time: '12 saat önce',
        color:'#ffb44d'
    },
    {
        icon: 'icon',
        title: 'Burger’s Lab',
        account: 'Aile Hesabım (Yasemin Pınar)',
        amount: '- ₺200,00',
        time: '2 saat önce',
        color:'#8066cc'
    },
    {
        icon: 'money',
        title: 'Gelen Transfer',
        account: 'Dolar Hesabım (Erman Karakaya)',
        amount: '$140,00',
        time: '6 saat önce',
        color:'#26bf66'
    },
    {
        icon: 'gold',
        title: 'Para Yükle',
        account: 'Altın Hesabım',
        amount: '2,00 gr',
        time: '12 saat önce',
        color:'#ffb44d'
    },

]


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