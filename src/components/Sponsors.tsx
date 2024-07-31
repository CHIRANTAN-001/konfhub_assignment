import React from 'react'
import Image from 'next/image'

const Sponsors = () => {
  return (
    <>
      <div className='pt-16'>
        <span className='text-2xl font-semibold uppercase'>This is event sponsors</span>
      </div>
      <div className='pt-10'>
        <div dangerouslySetInnerHTML={{ __html: `<p>This is description of sponsors section.</p>` }} />
      </div>
      <div className='grid grid-cols-4 pt-7'>
        <div className='col-span-1 border-gray-400 border-[0.5px] rounded-xl'>
          <div className='flex justify-center items-center'>
            <Image src='https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F09%2F1717977584480-2a58c92e-ac5f-4ebd-9570-d6bcfc792dc2.png&w=1920&q=75' className='object-cover bg-cover' alt='' height={250} width={250} />
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-start items-center gap-x-20 pt-10'>
        <span className='text-2xl font-medium'>
          SPONSOR<br/> CATEGORY
        </span>
        <div className='border-gray-400 border-[0.1px] w-3/4 '></div>
      </div>

      <div className='pt-8 pb-12'>
        <Image src='https://dev-media.konfhub.com/sponsors/2024/June/10/1717977635909-75bb1d01-51a2-4af1-82cd-72d587192692.jpg' className='rounded-xl' alt='' height={200} width={280} />
      </div> 
    </>
  )
}

export default Sponsors