import clsx from "clsx";

export default function ButtonAction({ href, text }: { href: string | undefined, text: string }) {

  return (
    <>
      <button 
      onClick={()=>window.open(href)}
      className={clsx("btn btn-xs lg:btn-sm btn-primary px-2 w-1/2 mx-auto lg:w-10/12",
        {
          "lg:group-hover:animate-slideLeft": href,
          "hidden sm:inline lg:group-hover:animate-slideRight btn-disabled ": !href
        }
      )}>
        <>{text}</>
      </button>
    </>
  );
}
