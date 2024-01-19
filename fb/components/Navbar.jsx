import Link from "next/link";
import { auth, currentUser, SignOutButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";



const links = [
  { href: '/authors', label: 'authors' },
  { href: '/works', label: 'works in progress' },
  // { href: '/my-page', label: 'my page' }
];

const Navbar = async () => {

  const homePageRedirect = async () => {
    'use server'
    console.log('home page');
    redirect('/')
  }

  const { userId } = auth();
  const user = await currentUser();

  // if (userId) {
  //   console.log(user.emailAddresses[0].id, userId);
  // } else {
  //   console.log("no user logged in");
  // }

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
        {userId ? (
          <div className="btn btn-primary shadow-2xl shadow-zinc-500">
            {user.emailAddresses[0].emailAddress}
            <SignOutButton signOutCallback={homePageRedirect} />
          </div>) : (
          <div>
            <h1> No User </h1>
          </div>
        )}
      </div>
    </nav>
  )
}
export default Navbar;