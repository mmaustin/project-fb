import ThemeToggle from "@/components/ThemeToggle";
import { auth } from "@clerk/nextjs";
import Link from "next/link";

const HomePage = () => {
  const { userId } = auth();
  console.log(userId);
  //   // cache no-store is necessary. otherwise, you'll get the very first fetch every time--i think.

  //   // const response = await fetch('http://localhost:3000/api/contestants', { cache: 'no-store' });
  //   // const data = await response.json();
  //   // console.log(data);

  return (
    <div className="flex flex-col justify-center items-start">
      <div className="m-2 w-40 w align-middle">
        <ThemeToggle />
      </div>
      <div className="hero min-h-screen ">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold uppercase border-t-2 border-dotted">
              Novel Ideas
              <p className="py-6 text-xl font-normal leading-loose normal-case border-t-2 border-dotted">Stop relying on sticky notes, napkins, and your "perfect" memory. Store all of your notes here.  Your book will thank you.</p>
            </h1>
            <Link href="/authors" className="btn btn-secondary rounded-lg ">Get Started</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomePage;
