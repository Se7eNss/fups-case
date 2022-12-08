import { Layout } from 'antd';
import React from 'react'
import styles from './HomeLayout.module.scss'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar/Navbar';
import useLoading from '../../hooks/useLoading';
import Loading from '../../components/loading/Loading';


const HomeLayout = () => {
  const { Header, Content} = Layout;
  const {loading}=useLoading()
  return (
  <>
  <Loading isLogin={false} isLoading={loading}/>
  <Layout className={styles.layout}>
      <Header className={styles.header}>
            <Navbar/>
        </Header>
        <Content className={styles.content}>
            <Outlet />
        </Content>
    </Layout>
  </>
    
    
  )
}

export default HomeLayout