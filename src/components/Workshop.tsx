import React from 'react'
import Image from 'next/image'
import { FaRegCalendar } from "react-icons/fa";

const workshopData = [
  {
    title: 'How to make more money',
    date: 'Jun 11th, 2024 at 10:00 AM (IST)',
    image: 'https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717977949758-0e87f502-f5b9-4799-b857-623780fc1415.png&w=1920&q=75',
    button: 'View Details'
  },
  {
    title: 'How to fight crime',
    date: 'Jun 1st, 2034 at 10:00 AM (IST)',
    image: 'https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717978156489-c8a828a9-13ca-4572-b117-0483bafd34d9.jpg&w=1920&q=75',
    button: 'View Details'
  },
  {
    title: 'This is a workshop ticket',
    date: 'Jun 1st, 2034 at 10:00 AM (IST)',
    image: 'https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717978363785-8225249d-f4dd-4572-826e-84093b5eb32f.jpg&w=1920&q=75',
    button: 'View Details'
  }
]

const Workshop = () => {
  return (
    <>
      <div className='pt-16'>
        <span className='text-2xl font-semibold uppercase'>This is workshop section</span>
      </div>
      <div className='pt-10'>
        <div dangerouslySetInnerHTML={{ __html: `<p>This is the description for workshop sections.</p>` }} />
      </div>
      <div className='pr-10'>
        <div className='grid grid-cols-3 pt-5 gap-x-10'>
          {workshopData.map((item, index) => (
            <div className='col-span-1 h-96 border-gray-300 border-[0.5px] rounded-lg' key={item.title}>
              <div className='flex flex-col justify-center items-center'>
                <Image className='pt-3' src={item.image} alt='' height={300} width={300} />
                <div className='flex flex-col justify-center pt-2'>
                  <span className='font-semibold text-xl pl-2 pr-8'>{item.title}</span>
                  <div className='flex flex-row justify-start items-center gap-x-4 pt-10'>
                    <FaRegCalendar className='text-black' />
                    <span className='text-lg'>{item.date}</span>
                  </div>
                  <div className='flex flex-row justify-start items-center gap-x-32 pt-7 pb-3'>
                    <Image className='rounded-full' src='https://dev-media.konfhub.com/past_events/2024/June/09/1717977208703-f9c5c15d-b0f1-4aeb-a492-3464c2c97afd.jpg' alt='' height={35} width={35} />
                    <button className='text-white bg-black px-6 py-3 rounded-lg'>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default Workshop