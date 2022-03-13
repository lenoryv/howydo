import React from 'react'
import Navbar from '@components/Navbar/Navbar'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <React.Fragment>
    <Navbar />
      {children}
  </React.Fragment>
)

export default Layout