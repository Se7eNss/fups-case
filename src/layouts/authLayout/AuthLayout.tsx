import { Layout } from 'antd';
import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './nav/Nav';
import styles from './AuthLayout.module.scss'
import Info from './infoSection/Info';
import Foot from './footer/Foot';


const AuthLayout = () => {
  const { Header, Sider, Content,Footer } = Layout;
  return (
    <Layout className={styles.main__layout}>
      <Layout className={styles.main__layout__layout}>
        <Header className={styles.header}>
            <Nav/>
        </Header>
        <Content className={styles.content}>
            <Outlet />
        </Content>
        <Footer>
            <Foot/>
        </Footer>
      </Layout>
      <Sider width={400} className={styles.main__layout__sider}>
        <Info/>
      </Sider>
    </Layout>
    
  )
}

export default AuthLayout