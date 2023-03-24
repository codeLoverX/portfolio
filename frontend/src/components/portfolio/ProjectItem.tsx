import { PortableText } from "@portabletext/react";
import clsx from "clsx";
import Image from "next/image";

import ButtonAction from "@/components/portfolio/ButtonAction";

import { urlFor } from "@/client/imageClient";

import { Project } from "@/types/project";

export default function ProjectItem({ project, isOdd }: { project: Project, isOdd: number }) {

  return (
    <>
      <div className={clsx('w-full md:w-3/4 lg:w-full rounded-3xl bg-transparent animate-flicker pb-8 px-0 lg:animate-none',
        {
          "lg:pl-[40px] pr-0 lg:group-hover:animate-slideLeft": isOdd,
          "lg:pr-[40px] pl-0 lg:group-hover:animate-slideRight": !isOdd
        }
      )} id='about' key={project._id}>
        <div className="text-center relative h-[550px] md:h-[450px] lg:h-[350px] lg:text-start grid grid-cols-1 gap-0 p-0 auto-rows-fr lg:grid-cols-2 bg-base-100 shadow-xl group/inside">
          <figure className="overflow-hidden w-full">
            <Image
              width={400}
              height={1000}
              className="object-top xl:grayscale-[0.6] xl:group-hover/inside:grayscale-0 xl:group-hover/inside:animate-movePictureDown mx-auto"
              src={urlFor(project.image).width(1000).url()}
              alt="Album" />
          </figure>
          <div className="px-4 py-4 text-lg ">
            <h2 className="text-start pb-4 text-xl">{project.title}</h2>
            <div className="text-justify text-gray-600">
              <PortableText value={project.description as any} />
            </div>
            <div className="absolute bottom-0 py-2 w-[90%] lg:w-[40%]">
              <div className="hidden lg:flex flex-wrap pb-2">
                {
                  project.technology.map((value, index) => {
                    return (<div className="pr-2 hover:text-blue-600" key={index}>∙{value}</div>);
                  })
                }
              </div>
              <div className="grid grid-cols-3 justify-center w-full mt-2 mb-6">
                <ButtonAction href={project.github} text="Github" />
                <ButtonAction href={project.liveDemo} text="Live" />
                <ButtonAction href={project.backendDemo} text="Backend" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
    ;
}
