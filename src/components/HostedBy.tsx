import React from 'react'
import Image from 'next/image'
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import Link from 'next/link';

const HostedBy = ({ data }: any) => {
  return (
      <>
          <div>
              <div className='pt-4'>
                  <span className='font-semibold text-xl'>HOSTED BY</span>
              </div>
              <div className='pt-2 border-gray-400 border-[0.5px] py-2 px-2 rounded-lg'>
                  <div className='flex flex-row justify-start items-center gap-x-4 py-2'>
                      <Image src='https://dev-media.konfhub.com/past_events/2024/June/09/1717977208703-f9c5c15d-b0f1-4aeb-a492-3464c2c97afd.jpg' height={40} width={40} className='rounded-full' alt='' />
                      <span className='text-lg font-semibold'>Manjunath R</span>
                  </div>
                  <span className=''>
                      This is the description of the organiser. You can get to know more about the organiser here.
                  </span>
                  <div className='pt-4'>
                      <span className='text-lg font-medium'>Contact us on</span>
                  </div>
                  {data && (
                      <div className='flex flex-row justify-start items-center gap-x-2 pt-1'>
                          <Link href={data.organizer_facebook_url} target='_blank' className='bg-black rounded-full p-1'>
                              <FaFacebook className='text-white size-4' />
                          </Link>
                          <Link href={data.organizer_twitter_url} target='_blank' className='bg-black rounded-full p-1'>
                              <RiTwitterXFill className='text-white size-4' />
                          </Link>
                          <Link href={data.organizer_linkedin_url} target='_blank' className='bg-black rounded-full p-1'>
                              <FaLinkedinIn className='text-white size-4' />
                          </Link>
                          <Link href={data.organiser_website} target='_blank' className='bg-black rounded-full p-1'>
                              <CiGlobe className='text-white size-4' />
                          </Link>
                          <Link href={data.organiser_email} target='_blank' className='bg-black rounded-full p-1'>
                              <MdEmail className='text-white size-4' />
                          </Link>
                          <Link href={data.organiser_phone} target='_blank' className='bg-black rounded-full p-1'>
                              <FaPhone className='text-white size-4' />
                          </Link>
                      </div>
                  )}
              </div>
        </div>
      </>
  )
}

export default HostedBy