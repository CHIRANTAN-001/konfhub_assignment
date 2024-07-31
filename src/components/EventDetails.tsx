"use client"
import React, { useEffect, useState } from 'react'
import { FaVideo } from "react-icons/fa6";
import { FaTicketAlt } from "react-icons/fa";
import Link from 'next/link';
import { HiOutlineExternalLink } from "react-icons/hi"

const EventDetails = ({ data}: any) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        const eventDate = new Date('Jul 31, 2034 06:00:00').getTime();

        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = eventDate - now;

            if (distance > 0) {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });
            } else {
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                });
            }
        };

        const timerId = setInterval(updateTimer, 1000);
        return () => clearInterval(timerId);
    },[])
    
  return (
      <>
          <div className='border-gray-300 border-[0.5px] py-4 px-3 rounded-lg'>
              <span className='text-3xl font-semibold'>{ data?.name}</span>
              <div className='flex flex-ro justify-start items-center gap-x-10 pt-4'>
                  <div className='flex flex-ro justify-start items-center gap-x-3'>
                      <FaVideo />
                      <span>Online</span>
                  </div>
                  <div className='flex flex-ro justify-start items-center gap-x-3'>
                      <FaTicketAlt />
                      <span>Paid</span>
                  </div>
              </div>
              <div className='pt-7'>
                  <span className='font-semibold'>Event Live Link : <Link href='' className='text-blue-500 underline font-normal'>Open streaming website</Link></span>
              </div>
              <div className='pt-3'>
                  <span className='font-semibold'>
                      {/* Date: <span className='font-normal'>Jul 31st, 2034 6:00 AM - Aug 31st, 2034 6:00 PM IST</span> */}
                      Date: <span className='font-normal'>Jul 31st, 2034 6:00 AM - Aug 31st, 2034 6:00 PM IST</span>
                  </span>
              </div>
              <div className='pt-4'>
                  <span className='uppercase text-lg'>Event starts in</span>
              </div>
              <div>
                  <span className='font-bold text-xl'>{timeLeft.days}D : </span>
                  <span className='font-bold text-xl'>{timeLeft.hours}H : </span>
                  <span className='font-bold text-xl'>{timeLeft.minutes}M : </span>
                  <span className='font-bold text-xl'>{timeLeft.seconds}S</span>
              </div>
          </div>
          <div className='pt-2 drop-shadow-lg'>
              {data && (
                  <button className='bg-black flex justify-center items-center text-white w-full py-3 rounded-lg'>
                      Buy Now
                  </button>
              )}
          </div>
          <div className='pt-2 drop-shadow-2xl'>
              {data && (
                  <Link href={data.event_website} className='flex flex-row justify-center items-center gap-x-2 border-black border-2 rounded-md py-2 hover:text-blue-600'>
                      <span >Official Website</span>
                      <HiOutlineExternalLink />
                  </Link>
              )}
          </div>
      </>
  )
}

export default EventDetails