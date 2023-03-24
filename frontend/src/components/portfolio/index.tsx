import { FaCandyCane } from 'react-icons/fa';

import ProjectItem from '@/components/portfolio/ProjectItem';

import { Project } from '@/types/project';

export default function Portfolio({ projects }: { projects: Project[] }) {



  return (
    <div className='w-full bg-gradient-to-l dark:bg-gray-50 from-gray-200 to-white-100 py-12 lg:py-24' id='portfolio'>
      <div className='container mx-auto w-9/12 justify-start xl:flex xl:w-6/12'>
        <div className='flex flex-col justify-center text-start lg:mt-0'>
          <h5 className='font-bold uppercase text-transparent text-xl text-extrabold bg-clip-text bg-gradient-to-r from-blue-400 via-purple-600 to-pink-600'>
            <FaCandyCane className='fill-[url(#blue-gradient)] mr-2 inline animate-bounce text-4xl' />
            Portfolios
          </h5>
          <p className='pt-4 text-lg lg:text-xl font-bold'>
            Each project is a cherished work of development...
          </p>
          <div className="mx-auto text-lg text-center py-8 flex justify-center flex-wrap gap-0 group">
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
