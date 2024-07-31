"use client"
import React, {useState, useEffect } from 'react'; 
import CoverImage from '@/components/CoverImage';
import OptionTabs from '@/components/OptionTabs';
import './globals.css'
import './index.css';
import EventDetails from '@/components/EventDetails';
import HostedBy from '@/components/HostedBy';
import Image from 'next/image';
import { FaRegUser } from "react-icons/fa6";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);


  return (
    <>
      <div>
        {/* Navbar */}
        <div className="flex flex-row justify-between items-center px-8 pt-7">
          {data && <Image src={data.navbar_icon} alt='' height={100} width={100} />}
         <FaRegUser/>
        </div>
        {/* middle */}
        <div className="grid grid-cols-5 pt-8 px-6">
          {/* left side */}
          <div className='col-span-4 pl-10 overflow-y-auto'>
            <CoverImage data={data} />
            <OptionTabs data={data} />
           
          </div>
          {/* right side */}
          <div className=' h-screen top-0 sticky'>
            <EventDetails data={data} />
            <HostedBy data={data} />
          </div>
        </div>
        
      </div>
    </>
  );
}
