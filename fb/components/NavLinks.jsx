import { getAuthorWithAuth } from "@/utils/actions";
import { auth } from "@clerk/nextjs";
import Link from "next/link";


const links = [
  { href: '/authors', label: 'authors' },
  { href: '/works', label: 'works' },
  { href: '/stats', label: 'stats' },
  { href: '/', label: 'home' }
];

const removeLinks = [
  { href: '/authors', label: 'authors' },
  { href: '/', label: 'home' }
];

const NavLinks = async () => {

  const { userId } = auth();
  const author = await getAuthorWithAuth(userId);

  return <ul className="menu text-base-content">
    {author ? links.map(link => {
      return (
        <li key={link.href}>
          <Link href={link.href} className="capitalize">
            {link.label}
          </Link>
        </li>
      )
    }) : removeLinks.map(link => {
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