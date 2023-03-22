const links = [
  { href: '/', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#project', label: 'Projects' },
  { href: '#contact', label: 'Contacts' },
];

const myName = 'ridwan.dev';

export function NavbarLinks() {
  return (
    <>
      <li>
        <a href={links[0].href}>{links[0].label}</a>
      </li>
      <li>
        <a href={links[1].href}>{links[1].label}</a>
      </li>
      <li>
        <a href={links[2].href}>{links[2].label}</a>
      </li>
      <li>
        <a href={links[3].href}>{links[3].label}</a>
      </li>
    </>
  );
}

export default function Header() {
  return (
    <div className='border-gray navbar lg:left-2 border-b bg-slate-50 shadow-lg lg:absolute lg:top-0'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn-ghost btn lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content menu rounded-box mt-3 w-[95vw] bg-base-100 p-2 text-center text-base shadow'
          >
            <NavbarLinks />
          </ul>
        </div>
        <a className='text-transparent bg-clip-text bg-gradient-to-r hidden p-2 text-lg font-extrabold normal-case lg:block from-purple-400 via-indigo-600 to-pink-600'>
          {myName}
        </a>
      </div>
      <div className='navbar-end hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 text-lg font-semibold'>
          <NavbarLinks />
        </ul>
      </div>
      <div className='navbar-end block lg:hidden text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-600 to-pink-600'>
        <a className='text-lg font-extrabold normal-case'>
          {myName}
        </a>
      </div>
    </div>
  );
}
