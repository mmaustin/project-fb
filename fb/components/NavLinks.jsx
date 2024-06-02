import Link from "next/link";


const links = [
  { href: '/authors', label: 'authors' },
  { href: '/works', label: 'works' },
  { href: '/stats', label: 'stats' },
  // { href: '/activity', label: 'activity' },
  { href: '/', label: 'home' }
];

const NavLinks = () => {
  return <ul className="menu text-base-content">
    {links.map(link => {
      return (
        <li key={link.href}>
          <Link href={link.href} className="capitalize">
            {link.label}
          </Link>
        </li>
      )
    })}
  </ul>
}
export default NavLinks;