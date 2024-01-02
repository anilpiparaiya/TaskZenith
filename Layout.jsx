import React from 'react'
import Header from './src/components/Header/Header'
// import Footer from './src/components/Footer/Footer'
import { Outlet } from 'react-router'


const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    {/* <Footer />*/}
    </>
  )
}

export default Layout