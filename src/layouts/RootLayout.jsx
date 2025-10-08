import React from 'react'
import Navbar from '../components/globals/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/globals/Footer'

function RootLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default RootLayout