import { FaCandyCane } from 'react-icons/fa';

export default function Portfolio() {
  return (
    <div className='w-full bg-white-100 py-16' id='portfolio'>
      <div className='container mx-auto w-9/12 justify-start lg:flex lg:w-6/12'>
        <div className='mt-8 flex flex-col justify-center text-center lg:mt-0 lg:text-start'>
          <h5 className='font-bold uppercase text-transparent text-xl text-extrabold bg-clip-text bg-gradient-to-r from-blue-400 via-purple-600 to-pink-600'>
            <FaCandyCane className='fill-[url(#blue-gradient)] mr-2 inline text-2xl animate-bounce ' />
            Portfolio
          </h5>
          <p className='pt-4 text-2xl font-bold'>
            Each project is a cherished work of development...
          </p>
        </div>
      </div>
    </div>
  );
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