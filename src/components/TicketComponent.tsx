import Link from 'next/link';
import React from 'react'
import { MdLocationOn } from 'react-icons/md';

interface TicketData {
    type: string;
    description: string;
    venue: string;
    additionalDetails: string;
    availableTill: string;
    price?: string;
    minPrice?: string;
    maxPrice?: string;
}

interface TicketProps {
    data: TicketData[];
}

const TicketComponent: React.FC<TicketProps> = ({ data }) => {
    return (
        <>
            {data.map((ticket, index) => (
                <div className='pt-3'>
                    <div key={index} className='bg-white mb-6 shadow-xl'>
                        <div className='flex flex-col rounded-md px-8'>
                            <span className='text-lg font-semibold  pt-5'>{ticket.type}</span>
                            <span className='text-sm pt-3'>{ticket.description}</span>
                            <Link href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ticket.venue)}`} target='_blank' className='flex flex-row justify-start items-start gap-x-1 text-sm text-blue-700 pr-4 pt-3'>
                                <MdLocationOn className='text-blue-500 size-6' />
                                <span>{ticket.venue}</span>
                            </Link>
                            <span className='font-semibold text-gray-500 text-sm pt-3'>{ticket.additionalDetails}</span>
                            <div className='pt-5'>
                                <div className='bg-gray-300 w-2/4 rounded-md pl-2'>
                                    <span className='text-sm'>{ticket.availableTill}</span>
                                </div>
                            </div>
                            <div className='pt-8 flex flex-row justify-between items-center pb-5'>
                                {/* <span className='text-2xl font-semibold'>{ticket.price}</span> */}
                                {ticket.price ? (
                                    <span className='text-2xl font-semibold'>{ticket.price}</span>
                                ) : (
                                    <span className='text-2xl font-semibold'>
                                            <span className='text-base font-normal'>Min</span> ₹{ticket.minPrice} <span className='text-base font-normal'>-</span> <span className='text-base font-normal'>Max</span> ₹{ticket.maxPrice}                                    </span>
                                )}
                                <Link href='' className='bg-black text-white font-medium px-6 py-3 rounded-lg shadow-xl hover:opacity-70'>
                                    Register
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default TicketComponent