import HeadAppBar from 'components/appbar/HeadAppbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const PublicRouter = () => {
  return (
    <>
    <HeadAppBar/>
    <Outlet/>
    </>
  )
}

export default PublicRouter
