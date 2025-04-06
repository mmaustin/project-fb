import Link from "next/link";


const links = [
  { href: '/demo-authors', label: 'author hub' },
  { href: '/demo-stats', label: 'monthly stats' },
  { href: '/demo-chart', label: 'category stats' },
  { href: '/', label: 'home' }
];

const DemoNavLinks = () => {
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
export default DemoNavLinks