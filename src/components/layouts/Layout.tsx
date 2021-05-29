import React from 'react'
import { Navigator } from '../Navigator'

export const Layout = ({ children }) => {
  return (
    <>
      <Navigator></Navigator>
      {children}
    </>
  )
}
