import clsx from "clsx";



export default function ButtonAction({ href, text }: { href: string | undefined, text: string }) {

  return (
    <>
      <button 
      onClick={()=>window.open(href)}
      disabled={href == undefined} className={clsx("btn btn-sm btn-primary inline-block py-2 px-2",
        {
          "lg:group-hover:animate-slideLeft": href,
          "lg:group-hover:animate-slideRight": !href
        }
      )}>
        <>{text}</>
      </button>
    </>
  );
}
