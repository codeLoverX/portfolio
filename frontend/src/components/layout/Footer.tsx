const links = [
  { href: '/', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#project', label: 'Projects' },
  { href: '#contact', label: 'Contacts' },
];
const myName = 'ridwan.dev';

export default function Footer() {
  return (
    <footer className="footer items-center text-center lg:text-left py-4 px-16 bg-slate-50  text-gray-500">
      <div className="items-center text-center grid-flow-col">
        <p>Copyright © Ridwan, {new Date().getFullYear()} - All right reserved</p>
      </div>
    </footer>
  );
}
