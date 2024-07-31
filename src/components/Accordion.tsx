import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion'
import React, { useState } from 'react'
import TicketComponent from './TicketComponent'
import { ticketData, ticketData1 } from '@/data/ticketdata1'
import { SlArrowDown } from "react-icons/sl";

interface AccordionProps {
    title: string;
    content: string;
    open: boolean;
}

const Accordian: React.FC<AccordionProps> = ({ title, content, open }) => {

    const [isOpen, setIsOpen] = useState(open)

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="w-full px-9 pt-4 pb-5">
                <div className="border border-gray-300 rounded-md shadow-xl">
                    <button
                        className="w-full flex justify-between items-center px-4 py-2 text-left text-lg font-semibold bg-white rounded-t-md focus:outline-none"
                        onClick={toggleAccordion}
                    >
                        {title}
                        <SlArrowDown
                            className={`transition-transform duration-300 size-5 text-blue-500  ${isOpen ? 'rotate-180' : 'rotate-0'
                                }`}
                        />
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out `}
                    >
                        {isOpen && (
                            <div className="px-4 py-2 text-base">{content}</div>
                        )}

                    </div>
                    <div className='px-4 transition-all duration-500 ease-in-out'>
                        {isOpen && (
                            <TicketComponent data={ticketData1} />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordian