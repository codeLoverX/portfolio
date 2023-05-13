/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import {
  FaCss3Alt,
  FaGithub,
  FaLaravel,
  FaLinkedin,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaSass,
} from 'react-icons/fa';
import { SiGraphql, SiNestjs, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { Typewriter } from 'react-simple-typewriter'

import { urlFor } from '@/client/imageClient';

import { Main } from '@/types/main';


export default function Intro({ main }: { main: Main }) {
  console.log({ main });
  return (
    <div className='my-0 flex lg:min-h-screen w-screen items-center justify-center py-12 lg:py-24 bg-gradient-to-l dark:bg-gray-50 from-gray-200 to-white-100'>
      <div className='w-full'>
        <div className='container mx-auto grid w-9/12 grid-cols-2 text-center lg:w-7/12 lg:text-start'>
          <div className='order-2 col-span-2 lg:order-1 lg:col-span-1 lg:pr-12'>
            <h1 className='pt-12 t lg:pt-0 font-extrabold text-transparent text-3xl lg:text-4xl bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-600 to-yellow-600'>
              {main.name}
            </h1>
            <div className='inline-block h-32 pt-12 text-base lg:text-xl text-gray-600'>
              <Typewriter
                words={[main.bio]}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
            <p className='pt-6 text-4xl xl:hover:text-5xl block'>
              <FaLinkedin className='inline hover:fill-blue-600' onClick={() => window.open(`${main.socials.linkedin}`)} />
              <FaGithub className='ml-2 inline hover:fill-blue-600' onClick={() => window.open(`${main.socials.github}`)} />
            </p>
          </div>
          <div className='order-1 col-span-3 lg:order-2 lg:col-span-1 lg:text-start'>
            <div className='avatar pt-0 '>
              <div className='rounded-[100px] shadow ring-offset w-58 lg:w-64 drop-shadow-2xl '>
                <Image
                  alt='hi'
                  className='object-center'
                  width='300'
                  height='380'
                  src={urlFor(main.image).width(300).height(380).url()}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='container mx-auto w-9/12 lg:w-7/12 mt-12'>
          <div className='flex align-center justify-center lg:justify-start flex-wrap gap-y-4 text-4xl xl:hover:text-5xl '>
            <FaCss3Alt className='  inline fill-blue-900 hover:fill-blue-600' />
            <FaSass className='ml-2  inline fill-pink-600 hover:fill-blue-600' />
            <FaReact className='ml-2  inline fill-blue-900 hover:fill-blue-600' />
            <SiTypescript className='ml-2  inline fill-blue-800 hover:fill-blue-600' />
            <SiNextdotjs className='fill:black-900 ml-2 inline  hover:fill-blue-600' />
            <SiGraphql className='ml-2 inline fill-pink-600  hover:fill-blue-600' />
            <FaNodeJs className='ml-2 inline fill-green-600  hover:fill-blue-600' />
            <FaLaravel className='ml-2 inline fill-red-600  hover:fill-blue-600' />
            <FaPhp className='ml-2 inline fill-purple-700  hover:fill-blue-600' />
            <SiNestjs className='ml-2 inline fill-red-700  hover:fill-blue-600' />
          </div>
        </div>
      </div>
    </div>
  );
}
// No bootstrap grid son. Embrace real grid.
// Grid ignores/ misues margin and needs padding and width.
