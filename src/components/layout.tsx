import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer'

export default function Layout() {
  return (
    <div>
      <Navbar/>
      <main><Outlet/></main>
      <Footer/>
    </div>
  )
}
