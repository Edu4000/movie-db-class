import React from 'react'
import { Outlet } from 'react-router-dom'

const PrivateRouter = () => {
  return (
    <>
    <div>Private router</div>
    <Outlet/>
    </>
  )
}

export default PrivateRouter
