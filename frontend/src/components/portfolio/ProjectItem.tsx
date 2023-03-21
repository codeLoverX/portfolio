import { PortableText } from "@portabletext/react";
import clsx from "clsx";
import Image from "next/image";

import { urlFor } from "@/client/imageClient";

import { Project } from "@/types/project";

export default function ProjectItem({ project, isOdd }: { project: Project, isOdd: number }) {

  return (
    <>
      <div className={clsx('w-full bg-transparent pb-8',
        {
          "pl-16": isOdd,
          "pr-16": !isOdd
        }
      )} id='about' key={project._id}>
        <div className="card lg:card-side text-start mx-auto bg-base-100 shadow-xl">
          <figure>
            <Image
              width={300}
              height={300}
              className="object-top"
              src={urlFor(project.image).width(300).height(380).url()}
              alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{project.title}</h2>
            <PortableText value={project.description as any} />
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
    ;
}
