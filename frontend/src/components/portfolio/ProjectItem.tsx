import { PortableText } from "@portabletext/react";
import clsx from "clsx";
import Image from "next/image";

import ButtonAction from "@/components/portfolio/ButtonAction";

import { urlFor } from "@/client/imageClient";

import { Project } from "@/types/project";

export default function ProjectItem({ project, isOdd }: { project: Project, isOdd: number }) {

  return (
    <>
      <div className={clsx('w-5/6 lg:w-full rounded-3xl bg-transparent animate-flicker pb-8 lg:animate-none',
        {
          "lg:pl-[40px] pr-0 lg:group-hover:animate-slideLeft": isOdd,
          "lg:pr-[40px] pl-0 lg:group-hover:animate-slideRight": !isOdd
        }
      )} id='about' key={project._id}>
        <div className="text-center h-[600px] lg:h-72 lg:text-start grid grid-cols-1 auto-rows-fr lg:grid-cols-2 bg-base-100 shadow-xl group/inside">
          <figure className="overflow-hidden h-full">
            <Image
              width={400}
              height={1000}
              className="object-top xl:grayscale-[0.6] xl:group-hover/inside:grayscale-0 mx-auto"
              src={urlFor(project.image).width(1000).url()}
              alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="">{project.title}</h2>
            <PortableText value={project.description as any} />
            <div className="hidden lg:flex flex-wrap">
              {
                project.technology.map((value, index) => {
                  return (<div className="pr-2 underline underline-offset-2 hover:text-blue-600" key={index}>{value}</div>);
                })
              }
            </div>
            <div className="card-actions grid grid-cols-1 lg:grid-cols-3 mx-auto w-3/4 lg:w-full mt-2">
              <ButtonAction href={project.github} text="Github"/>
              <ButtonAction href={project.liveDemo} text="Live"/>
              <ButtonAction href={project.backendDemo} text="Backend"/>
            </div>

          </div>
        </div>
      </div>
    </>
  )
    ;
}
