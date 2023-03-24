import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import {
  FaStarHalfAlt
} from 'react-icons/fa';
import { MdOutlineWavingHand } from 'react-icons/md';
import { Typewriter } from 'react-simple-typewriter';

import { Main } from '@/types/main';

export default function About({ main }: { main: Main }) {
  return (
    <div className='w-full bg-gradient-to-r from-gray-100 to-white-100 group py-12 lg:py-24' id='about'>
      <div className='container mx-auto w-9/12 justify-center 2xl:flex lg:w-6/12'>
        <div className='text-center lg:mr-8 '>
          <div className='avatar lg:pt-0 w-72 xl:w-96 px-0'>
            <div className='rounded-3xl relative w-full z-20 mx-auto'>
              <Image
                alt='hi'
                className='z-20'
                width='300'
                height='300'
                src='/images/laptop.jpeg'
              />
              <div className='absolute inline-block text-md w-full z-40 py-2 opacity-75
               text-black top-[50%] left-[50%] translate-y-[-50%] bg-transparent translate-x-[-50%] invisible
                lg:group-hover:visible group-hover:bg-gray-300'>
                <div className='inline-block w-full'>
                  <FaStarHalfAlt className='mb-0 mx-auto block' />
                </div>
                <div className='font-extrabold text-extrabold opacity-100 uppercase'>
                  <Typewriter
                    words={["SOFTWARE", "DEVELOPER"]}
                    loop={0}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-8 flex flex-col justify-center align-center text-justify lg:mt-0 '>
          <h5 className='font-bold uppercase text-transparent text-xl text-extrabold bg-clip-text bg-gradient-to-r
           text-center xl:text-start from-blue-400 via-purple-600 to-pink-600 pt-4'>
            <MdOutlineWavingHand className='text-4xl inline fill-[url(#blue-gradient)] animate-bounce -ml-4 mr-2 t' />
            About me
          </h5>
          <p className='pt-4 text-lg md:text-xl font-bold'>
            A dedicated software developer based in Dhaka, Bangladesh.
            <br />
          </p>
          <div className='pt-6 text-lg text-gray-600'>
            <PortableText value={main.about as any} />
          </div>
        </div>
      </div>
    </div>
  );
}
