import Link from "next/link";

const links = [
  { href: '/authors', label: 'authors' },
  { href: '/works', label: 'works in progress' },
  { href: '/my-page', label: 'my page' }
];

const Navbar = () => {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link href='/' className="btn btn-primary shadow-2xl shadow-zinc-500">
          Novel Ideas
        </Link>
        <ul className="menu menu-horizontal md:ml-8">
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
      </div>
    </nav>
  )
}
export default Navbar;