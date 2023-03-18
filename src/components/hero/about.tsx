import Image from 'next/image';
import { FaCandyCane } from 'react-icons/fa';

export default function About() {
  return (
    <div className='w-full bg-gray-100 py-32'>
      <div className='container mx-auto w-9/12 grid-cols-3 justify-center lg:flex lg:w-6/12'>
        <div className='text-end lg:mr-12'>
          <div className='avatar lg:pt-0'>
            <div className='mask mask-square w-64 lg:w-96'>
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
        <div className='text-start'>
          <h5 className=' text-lg font-bold uppercase text-blue-600'>
            About me
          </h5>
          <p className='pt-2 text-lg font-bold'>
            A dedicated software developer based in Dhaka, Bangladesh.
            <FaCandyCane className='ml-2 inline fill-blue-600 text-2xl' />
          </p>
          <p className='pt-12 text-lg  text-gray-500'>
            As a Junior Developer, I excel in designing and maintaining
            responsive websites that offer a smooth user experience. I provide
            services such as application development, API integration and
            development, and database management. My expertise lies in crafting
            dynamic, engaging interfaces through writing clean and optimized
            code and utilizing cutting-edge development tools and techniques.
          </p>
        </div>
      </div>
    </div>
  );
}
