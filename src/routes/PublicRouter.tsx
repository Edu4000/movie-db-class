import HeadAppBar from 'components/appbar/HeadAppbar'
import Navbar from 'components/navbar/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const PublicRouter = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default PublicRouter
