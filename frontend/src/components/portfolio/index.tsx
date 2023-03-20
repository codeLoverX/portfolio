import { FaCandyCane } from 'react-icons/fa';

export default function Portfolio() {
  return (
    <div className='w-full bg-white-100 py-16' id='portfolio'>
      <div className='container mx-auto w-9/12 justify-start lg:flex lg:w-6/12'>
        <div className='mt-8 flex flex-col justify-center text-center lg:mt-0 lg:text-start'>
          <h5 className='text-lg font-bold uppercase text-blue-600'>
            Portfolio
          </h5>
          <p className='pt-4 text-2xl font-bold'>
            Each project is a cherished work of development...
            <FaCandyCane className='ml-2 inline fill-blue-600 text-2xl' />
          </p>
        </div>
      </div>
    </div>
  );
}

interface IProjectType {
  image: {
    href: string,
    alt: string,
    imageWidth?: string,
    imageHeight?: string
  },
  project: {
    github: string,
    title: string,
    description: string,
    technologies: string[],
    liveDemo: string,
    backendDemo?: string,
  }
}

// const projects: IProjectType[] = [
//   {
//     image: {
//       href: "https://football-mern-shop.netlify.app/",
//       alt: "screnshot",
//       imageWidth: "250",
//       imageHeight?: "250"
//     },
//     project: {
//       github: "",
//       title: ,
//       description: string,
//       technologies: string[],
//       liveDemo: string,
//       backendDemo: "",
//     }
//   }
// ]