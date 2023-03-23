import { PortableText } from '@portabletext/react';
import { FaFileContract } from 'react-icons/fa';

import { Particular } from '@/types/particular';

export default function Particulars({ particulars }: { particulars: Particular[] }) {

  return (
    <div className='w-full  bg-gradient-to-r from-gray-100 to-white-100  py-16' id='particulars'>
      <div className='container mx-auto w-9/12 lg:w-6/12'>
        <h5 className='font-bold uppercase text-transparent text-xl text-extrabold bg-clip-text bg-gradient-to-r from-blue-400 via-purple-600 to-pink-600'>
          <FaFileContract className='fill-[url(#blue-gradient)] mr-2 inline text-2xl animate-bounce ' />
          Particulars
        </h5>
        <p className='pt-4 text-2xl font-bold mb-6'>
          Please check out the relevant work experience, skills and education level.
        </p>
        {particulars.map((value, index) => (
          <div key={value._id} tabIndex={index} className="collapse w-full collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
              {value.title}
            </div>
            <div className="collapse-content">
              <div>
                <PortableText value={value.description as any} />
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
