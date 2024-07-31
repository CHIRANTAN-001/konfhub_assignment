import React from 'react'
import Image from 'next/image'

const CoverImage = ({data}) => {
  return (
    //   <div className='' >
          <Image
              src={data?.poster_thumbnail}
              className=" w-11/12  bg-white rounded-xl drop-shadow-2xl"
              width={1000} height={600} alt=''
          />
    // </div/>
  )
}

export default CoverImage