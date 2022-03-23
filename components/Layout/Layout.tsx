import React from 'react'
import Navbar from '@components/Navbar/Navbar'
import Sidenav from '@components/Sidenav/Sidenav'
import Banner from '@components/Banner/Banner'

type LayoutProps = {
  children?: React.ReactNode
}



function Layout({ children }: LayoutProps) {
  return (
    <React.Fragment>
      <Navbar />
      <Sidenav 
      />
      {children}
      <Banner />
    </React.Fragment>
  )
}

export default Layout