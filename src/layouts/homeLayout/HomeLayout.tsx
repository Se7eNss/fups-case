import { Layout } from 'antd';
import React from 'react'
import styles from './HomeLayout.module.scss'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar/Navbar';


const HomeLayout = () => {
  const { Header, Content} = Layout;
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
            <Navbar/>
        </Header>
        <Content className={styles.content}>
            <Outlet />
        </Content>
    </Layout>
    
  )
}

export default HomeLayout