import { Layout } from 'antd';
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './nav/Nav';
import styles from './AuthLayout.module.scss'
import Info from './infoSection/Info';
import Foot from './footer/Foot';
import Loading from '../../components/loading/Loading';
import useAuth from '../../hooks/useAuth';


const AuthLayout = () => {
  const { Header, Sider, Content,Footer } = Layout;

  //loading düzeltilecek
  return (
    <>
    <Loading isLoading={false}/>
    <Layout className={styles.main__layout}>
      <Layout className={styles.main__layout__layout}>
        <Header className={styles.header}>
            <Nav/>
        </Header>
        <Content className={styles.content}>
            <Outlet />
        </Content>
        <Footer className={styles.footer}>
            <Foot/>
        </Footer>
      </Layout>
      <Sider width={400} className={styles.main__layout__sider}>
        <Info/>
      </Sider>
    </Layout>
    </>
    
    
  )
}

export default AuthLayout