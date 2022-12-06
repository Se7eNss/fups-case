import React, { useRef } from 'react'
import Slide from '../../../components/slide/Slide'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Carousel.module.scss'


const slides=[
  {
    image:'image-banner-showcase-01',
    header:'TURKCELL KAMPANYASI',
    text:'Fatura ödemelerinizde her ay 10 TL kazan dilediğince harca.'
  },
  {
    image:'image-banner-showcase-02',
    header:'OYUN & E-PIN FIRSATI',
    text:'Tüm alışverişlerinizde %20 bonus kazanma fırsatını kaçırma.'
  },
  {
    image:'image-banner-showcase-03',
    header:'TURKCELL KAMPANYASI',
    text:'Fups App`i hemen indir! Ücretsiz işlem fırsatından sende yararlan.'
  },
  {
    image:'image-banner-showcase-02',
    header:'OYUN & E-PIN FIRSATI',
    text:'Tüm alışverişlerinizde %20 bonus kazanma fırsatını kaçırma.'
  },
  {
    image:'image-banner-showcase-01',
    header:'TURKCELL KAMPANYASI',
    text:'Fatura ödemelerinizde her ay 10 TL kazan dilediğince harca.'
  }
]


const Carousel = () => {
  const slider = useRef<any>();

  const next = () => {
    slider.current != null && slider.current.slickNext();
  };
  const previous = () => {
    slider.current != null && slider.current.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4.1,
    slidesToScroll: 2,
    arrows: false,
    dotsClass: styles.custom__arrows,
    responsive: [
      {
        breakpoint: 1394,
        settings: {
          slidesToShow: 3.09,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },

      {
        breakpoint:770,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__header}>
        <p className={styles.carousel__header__text}>SİZE ÖZEL KAMPANYALAR</p>
        <div className={styles.carousel__header__arrows}>
          <img
            onClick={previous}
            src="/assets/icons/icon-20-helper-arrow-left.svg"
            alt="prev"
          />
          <img
            onClick={next}
            src="/assets/icons/icon-20-helper-arrow-right.svg"
            alt="next"
          />
        </div>

      </div>
      <Slider ref={(c) => (slider.current = c)}  {...settings}>
          {slides.map(slide => <Slide key={slide.header} header={slide.header} text={slide.text} image={slide.image} />)}
      </Slider>
    </div>




  )
}

export default Carousel