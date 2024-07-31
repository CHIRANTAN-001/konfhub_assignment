import Link from 'next/link';
import React from 'react';
import { MdLocationOn } from "react-icons/md";
import TicketComponent from './TicketComponent';
import { ticketData } from '@/data/ticketdata1';
import Accordion from './Accordion';

const Tickets = () => {
  return (
    <>
      <div className='pt-16'>
        <div className='pb-10'>
          <span className='text-2xl font-semibold'>TICKETS</span>
        </div>
        <div className='px-48'>
          <div className='flex flex-col justify-center items-center bg-gray-100 rounded-md pt-8'>
            <TicketComponent data={ticketData}  />  
            <Accordion
              title="This is a Category"
              content="This is category description. This category is collapsed by default."
              open={true}
            />
            <Accordion
              title="This is also a category. But with a little longer name. Also note, this category expanded by default."
              content="This is category description. This category is expanded by default. This is a little longer description. Adding more content to make the description look longer. Adding more content to make the description look longer. Adding more content to make the description look longer. Adding more content to make the description look longer. Adding more content to make the description look longer. Adding more content to make the description look longer."
              open={false}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Tickets