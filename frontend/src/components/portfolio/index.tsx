import { FaCandyCane } from 'react-icons/fa';

import ProjectItem from '@/components/portfolio/ProjectItem';

import { Project } from '@/types/project';

export default function Portfolio({ projects }: { projects: Project[] }) {



  return (
    <div className='w-full bg-gradient-to-l from-gray-200 to-white-100 py-16' id='portfolio'>
      <div className='container mx-auto w-9/12 justify-start xl:flex xl:w-7/12'>
        <div className='mt-8 flex flex-col justify-center text-center lg:mt-0 lg:text-start'>
          <h5 className='font-bold uppercase text-transparent text-xl text-extrabold bg-clip-text bg-gradient-to-r from-blue-400 via-purple-600 to-pink-600'>
            <FaCandyCane className='fill-[url(#blue-gradient)] mr-2 inline text-2xl animate-bounce ' />
            Portfolio
          </h5>
          <p className='pt-4 text-2xl font-bold'>
            Each project is a cherished work of development...
          </p>
          <div className="w-full mx-auto text-center py-8 flex justify-center flex-wrap gap-3 group">
            {
              projects.map((value, index) => {
                return (
                  <ProjectItem project={value} key={value._id} isOdd={index % 2} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
