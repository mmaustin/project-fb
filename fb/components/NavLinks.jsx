import Link from "next/link";


const links = [
  { href: '/authors', label: 'authors' },
  { href: '/works', label: 'works' },
  { href: '/encouragements', label: 'encouragements' }
];

const NavLinks = () => {
  return <div className="menu text-base-content">
    {links.map(link => {
      return (
        <li key={link.href}>
          <Link href={link.href} className="capitalize">
            {link.label}
          </Link>
        </li>
      )
    })}
  </div>
}
export default NavLinks;