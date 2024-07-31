import React from 'react'
import Image from 'next/image'
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import Link from 'next/link';


const speakerData = [
  {
    name: 'Bruce Wayne',
    designation: 'Chairman',
    company: 'Wayne Enterprises',
    image: 'https://dev-media.konfhub.com/past_events/2024/June/09/1717977208703-f9c5c15d-b0f1-4aeb-a492-3464c2c97afd.jpg',
    socialMedia: [
      {
        icon: <FaFacebook className='text-white size-3'/>,
        link: ''
      },
      {
        icon: <RiTwitterXFill className='text-white size-3'/>,
        link: ''
      },
      {
        icon: <FaLinkedinIn className='text-white size-3' />,
        link: ''
      },
      {
        icon: <CiGlobe className='text-white size-3' />,
        link: ''
      }
    ]
  },
  {
    name: 'Bruce Wayne',
    designation: 'Batman',
    company: 'Gotham',
    image: 'https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg',
    socialMedia: [
      {
        icon: <FaFacebook className='text-white size-3' />,
        link: ''
      },
      {
        icon: <RiTwitterXFill className='text-white size-3' />,
        link: ''
      },
      {
        icon: <FaLinkedinIn className='text-white size-3' />,
        link: ''
      },
      {
        icon: <CiGlobe className='text-white size-3' />,
        link: ''
      }
    ]
  }
]

const Speakers = () => {
  return (
    <>
      <div className='pt-16'>
        <span className='text-2xl font-semibold uppercase'>This is speakers section</span>
      </div>
      <div className='pt-10'>
        <div dangerouslySetInnerHTML={{ __html: `<p>This is the description for speakers section.</p>` }} />
      </div>
      <div className='grid grid-cols-3 gap-x-6 pr-36'>
        {speakerData.map((speaker, index) => (
          <div key={index} className='col-span-1 border-gray-300 border-[0.5px] rounded-lg'>
            <div className='flex flex-row justify-start items-center px-3 py-2 gap-x-5'>
              <Image src={speaker.image} height={100} width={100} alt={speaker.name} />
              <div className='flex flex-col gap-y-1'>
                <span className='font-semibold text-base'>{speaker.name}</span>
                <span className='text-sm'>{speaker.designation}</span>
                <span className='text-sm'>{speaker.company}</span>
                <div className='flex flex-row justify-start items-center gap-x-4'>
                  {speaker.socialMedia.map((social, i) => (
                    <Link key={i} href={social.link} className='bg-black rounded-full p-1'>
                      {/* {React.createElement(social.icon, { className: 'text-white size-3' })} */}
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Speakers