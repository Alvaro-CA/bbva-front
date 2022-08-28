import React from 'react'
import Page from '../../components/page/page'
import Products from '../../components/page/components/products/products'
import Banner1 from './banner/banner1'

const Landing = () => {
  return (
    <Page>
      <Banner1 />
      <Products />
    </Page>
  )
}

export default Landing