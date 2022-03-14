import React from 'react'
import Navbar from '@components/Navbar/Navbar'
import Sidenav from '@components/Sidenav/Sidenav'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <React.Fragment>
    <Navbar />
    <Sidenav/>
      {children}
  </React.Fragment>
)

export default Layout