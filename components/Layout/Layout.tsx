import React from 'react'
import Navbar from '@components/Navbar/Navbar'
import Banner from '@components/Banner/Banner'
import Sidebar from '@components/Sidebar/Sidebar'

type LayoutProps = {
  children?: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <React.Fragment>
      <Navbar />
      <Sidebar />
      {children}
      <Banner />
    </React.Fragment>
  )
}

export default Layout