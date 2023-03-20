import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { FaCandyCane } from 'react-icons/fa';

import { Main } from '@/types/main';

export default function About({ main }: { main: Main }) {
  return (
    <div className='w-full bg-slate-100 py-16' id='about'>
      <div className='container mx-auto w-9/12 grid-cols-3 justify-center lg:flex lg:w-6/12'>
        <div className='text-center lg:mr-12 lg:text-end'>
          <div className='avatar lg:pt-0'>
            <div className='mask mask-circle w-64 lg:w-96'>
              <Image
                alt='hi'
                className=''
                width='250'
                height='250'
                src='/images/test.jpg'
              />
            </div>
          </div>
        </div>
        <div className='mt-8 flex flex-col justify-center  text-center lg:mt-0 lg:text-start'>
          <h5 className='text-lg font-bold uppercase text-blue-600'>
            About me
          </h5>
          <p className='pt-4 text-2xl font-bold'>
            A dedicated software developer based in Dhaka, Bangladesh.
            <FaCandyCane className='ml-2 inline fill-blue-600 text-2xl' />
          </p>
          <div className='pt-12 text-justify text-lg text-gray-500 '>
            <PortableText value={main.about as any} />
          </div>
        </div>
      </div>
    </div>
  );
}
