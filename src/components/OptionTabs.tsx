"use client"
import React, { useEffect, useState } from 'react'
import '../app/globals.css'
import Link from 'next/link'
import '../app/index.css'
import About from './About'
import Tickets from './Tickets'
import Speakers from './Speakers'
import Workshop from './Workshop'
import Sponsors from './Sponsors'

const options = [
    { id: 'about', label: 'About', Component: About },
    { id: 'tickets', label: 'Tickets', Component: Tickets },
    { id: 'speakers', label: 'This is speakers section', Component: Speakers },
    { id: 'workshop', label: 'This is workshop section', Component: Workshop },
    { id: 'sponsors', label: 'This is event sponsors', Component: Sponsors },
];

const OptionTabs = ({data}: any) => {
    const [activeTab, setActiveTab] = useState<string>('about');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        if (activeTab !== 'about') {
            const timer = setTimeout(() => {
                setActiveTab('about');
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [activeTab]);


    return (
        <>
            <div className=' pt-8'>
                <div className='flex justify-start items-center gap-x-9'>
                    {options.map((option) => (
                        <Link href={`#${option.id}`} key={option.id} onClick={() => handleTabClick(option.id)}
                            className={`flex justify-center items-center px-6 py-5 font-semibold ${activeTab === option.id ? 'border-b-2 border-black' : 'hover:bg-gray-200'
                                }`}>
                                {option.label}
                        </Link>
                    ))}
                </div>
            </div>
            <div className='border-gray-400 border-[0.1px] w-11/12 '>

            </div>

            {/* <div>
                {options.map((option) => (
                    <div id={option.id} key={option.id}>
                        <option.Component data={data} />
                    </div>
                ))}
            </div> */}
            <div>
                <div>
                    <About data={data} />
                </div>
                <div>
                    <Tickets />
                </div>
                <div>
                    <Speakers />
                </div>
                <div>
                    <Workshop />
                </div>
                <div>
                    <Sponsors />
                </div>
            </div>
        </>
    )
}

export default OptionTabs