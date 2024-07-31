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

export const ticketData: TicketData[] = [
    {
        type: 'Free Ticket',
        description: 'This is a ticket description. This is a free ticket. This ticket is uncategorised.',
        venue: 'KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India',
        additionalDetails: 'This is additional venue details.',
        availableTill: 'Available Till: 31st Aug 2034, 06:00 PM IST',
        price: 'FREE'
    },
    {
        type: 'Paid Ticket',
        description: 'This is a ticket description. This is a paid ticket. This ticket is uncategorised.',
        venue: 'KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India',
        additionalDetails: 'This is additional venue details.',
        availableTill: 'Available Till: 31st Aug 2034, 06:00 PM IST',
        price: '₹1,000'
    },
    {
        type: 'Donation Ticket',
        description: 'This is a ticket description. This is a donation ticket. This ticket is uncategorised.',
        venue: 'KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India',
        additionalDetails: 'This is additional venue details.',
        availableTill: 'Available Till: 31st Aug 2034, 06:00 PM IST',
        minPrice: '10',
        maxPrice: '1000',
    },
    {
        type: 'Ticket With Coupon',
        description: 'This is a ticket description. This is a paid ticket. This ticket is uncategorised.',
        venue: 'KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India',
        additionalDetails: 'This is additional venue details.',
        availableTill: 'Available Till: 31st Aug 2034, 06:00 PM IST',
        price: '₹1,000'
    }
];

export const ticketData1: TicketData[] = [
    {
        type: 'Free Ticket',
        description: 'This is a ticket description. This is a free ticket. This ticket is uncategorised.',
        venue: 'KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India',
        additionalDetails: 'This is additional venue details.',
        availableTill: 'Available Till: 31st Aug 2034, 06:00 PM IST',
        price: 'FREE'
    },
    {
        type: 'Paid Ticket',
        description: 'This is a ticket description. This is a paid ticket. This ticket is uncategorised.',
        venue: 'KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India',
        additionalDetails: 'This is additional venue details.',
        availableTill: 'Available Till: 31st Aug 2034, 06:00 PM IST',
        price: '₹1,000'
    },
];