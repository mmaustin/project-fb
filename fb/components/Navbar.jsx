import Link from "next/link";
import { auth, currentUser, UserButton, SignOutButton } from "@clerk/nextjs";


const links = [
  { href: '/authors', label: 'authors' },
  { href: '/works', label: 'works in progress' },
  // { href: '/my-page', label: 'my page' }
];

const Navbar = async () => {

  const { userId } = auth();
  const user = await currentUser();

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
        <div className="px-4 flex items-center gap-2">
          <UserButton afterSignOutUrl="/" />
          <p>{user.emailAddresses[0].emailAddress}</p>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;