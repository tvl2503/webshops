import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Banner from './Banner'
const banner = "https://mcdn.nhanh.vn/store3/97757/bn/Banner_Mule_1400x600.jpg"
const Nike = () => {
  return (
    <div>
        <Banner src = {banner} />
        <Breadcrumb />
    </div>
  )
}

export default Nike