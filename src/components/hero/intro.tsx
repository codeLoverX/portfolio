import Image from 'next/image';
import {
  FaCandyCane,
  FaCss3Alt,
  FaGithub,
  FaLaravel,
  FaLinkedin,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaSass,
} from 'react-icons/fa';
import { MdOutlineWavingHand } from 'react-icons/md';
import { SiGraphql, SiNestjs, SiNextdotjs, SiTypescript } from 'react-icons/si';

export default function Intro() {
  return (
    <div className='my-0 flex h-screen w-screen items-center justify-evenly py-0'>
      <div className='w-full'>
        <div className='container mx-auto grid w-9/12 grid-cols-3 text-center lg:w-10/12 lg:text-start xl:w-7/12'>
          <div className='order-2 col-span-3 lg:order-1 lg:col-span-2 lg:pr-12'>
            <h1 className='pt-12 text-6xl font-bold lg:pt-0'>
              Software engineer
              <MdOutlineWavingHand className='ml-2 inline fill-blue-600' />
            </h1>
            <p className='pt-12 text-lg font-light text-gray-600'>
              Hi, I'm Ridwan Bin Monjur. A passionate Software Developer based
              in Dhaka, Bangladesh.
              <FaCandyCane className='ml-2 inline fill-blue-600 text-2xl' />
            </p>
            <p className='pt-6'>
              <FaLinkedin className='inline text-4xl hover:fill-blue-600' />
              <FaGithub className='ml-2 inline text-4xl hover:fill-blue-600' />
            </p>
          </div>
          <div className='order-1 col-span-3 lg:order-2 lg:col-span-1'>
            <div className='avatar pt-12 lg:pt-0'>
              <div className='mask mask-squircle w-72 lg:w-96'>
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
        </div>
        <div className='my-12 lg:my-0'>
          <div className='container mx-auto w-9/12 pt-6 text-center text-lg lg:w-10/12 lg:pt-0 lg:text-start xl:w-7/12'>
            <div className='pt-0 lg:pt-6'>
              <p className='align-center mx-auto mb-2 w-3/12 border-b-2 border-b-black border-r-black pb-2 pr-0 md:w-2/12 lg:mr-4 lg:inline lg:border-r-2 lg:border-b-0 lg:pr-4'>
                Frontend
              </p>
              <p className='align-center mr-0 mb-2 border-r-black pb-2 pr-0 lg:mr-4 lg:inline lg:border-r-2 lg:pr-12'>
                CSS, SASS, React, Typescript, Next.js, Graphql
                &nbsp;&nbsp;&nbsp;&nbsp;
              </p>
              <p className='align-center mr-0 mb-2 pb-2 pr-0 lg:mr-12 lg:inline lg:pr-12'>
                <FaCss3Alt className='ml-2 inline fill-blue-600 text-3xl hover:fill-blue-600' />
                <FaSass className='ml-2 inline fill-pink-600 text-3xl hover:fill-blue-600' />
                <FaReact className='ml-2 inline fill-blue-600 text-3xl hover:fill-blue-600' />
                <SiTypescript className='ml-2 inline fill-blue-800 text-3xl hover:fill-blue-600' />
                <SiNextdotjs className='fill:black-900 ml-2 inline text-3xl hover:fill-blue-600' />
                <SiGraphql className='ml-2 inline fill-pink-600 text-3xl hover:fill-blue-600' />
              </p>
            </div>
            <div className='pt-0 lg:pt-6'>
              <p className='align-center mx-auto mb-2 w-3/12 border-b-2 border-b-black border-r-black pb-2 pr-0 md:w-2/12 lg:mr-4 lg:inline lg:border-r-2 lg:border-b-0 lg:pr-4'>
                Backend
              </p>
              <p className='align-center mr-0 mb-2 border-r-black pb-2 pr-0 lg:mr-4 lg:inline lg:border-r-2 lg:pr-12'>
                Node.js, Laravel, Typescript, Php, Nest.js, Graphql
              </p>
              <p className='align-center mr-0 mb-2 pb-2 pr-0 lg:mr-12 lg:inline lg:pr-12'>
                <FaNodeJs className='ml-2 inline fill-green-600 text-3xl hover:fill-blue-600' />
                <FaLaravel className='ml-2 inline fill-red-600 text-3xl hover:fill-blue-600' />
                <SiTypescript className='ml-2 inline fill-blue-800 text-3xl hover:fill-blue-600' />
                <FaPhp className='ml-2 inline fill-purple-700 text-3xl hover:fill-blue-600' />
                <SiNestjs className='ml-2 inline fill-red-700 text-3xl hover:fill-blue-600' />
                <SiGraphql className='ml-2 inline fill-pink-600 text-3xl hover:fill-blue-600' />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// No bootstrap grid son. Embrace real grid.
// Grid ignores/ misues margin and needs padding and width.
