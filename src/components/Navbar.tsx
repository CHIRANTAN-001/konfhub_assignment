import Image from 'next/image'
import React from 'react'
import { FaRegUser } from 'react-icons/fa'

const Navbar = ({ data }: any) => {
  return (
      <>
       <div className="flex flex-row justify-between items-center px-8 pt-7">
          {data?.navbar_icon && (
            <Image src={data?.navbar_icon} alt='' height={100} width={100} />
          )}
         <FaRegUser/>
        </div>
      </>
  )
}

export default Navbar