import clsx from "clsx";

export default function ButtonAction({ href, text }: { href: string | undefined, text: string }) {

  return (
    <>
      <button 
      onClick={()=>window.open(href)}
      className={clsx("btn btn-sm btn-primary md:no-underline w-10/12",
        {
          "": href,
          "btn-disabled ": !href
        }
      )}>
        <>{text}</>
      </button>
    </>
  );
}
