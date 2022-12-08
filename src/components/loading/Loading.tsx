import React from 'react'
import styles from './Loading.module.scss'
import Lottie from "lottie-react";
import  * as LoadingAnimation from '../../lotties/loading.json'

interface LoadingProps{
    isLoading:boolean,
    isLogin:boolean
}

const Loading = ({isLoading,isLogin}:LoadingProps) => {
    
  return (
    <>
    {isLoading &&
    <div className={styles.loadingContainer}>
        <div className={styles.loadingContainer__wrapper}>
        <Lottie 
            loop={true}
            animationData={LoadingAnimation}        
        />
        {isLogin && <p className={styles.loadingContainer__wrapper__text}>GİRİŞ YAPILIYOR...</p> } 
        </div>
        
    </div>}
    </>
    
  )
}

export default Loading