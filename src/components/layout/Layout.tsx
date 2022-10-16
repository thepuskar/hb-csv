import { Navbar } from 'components'
import { ReactNode } from 'react'

interface ILayout {
  children: ReactNode
}

export const Layout = (props: ILayout) => {
  return (
    <>
      <Navbar />
      {props?.children}
    </>
  )
}
