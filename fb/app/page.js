import ThemeToggle from "@/components/ThemeToggle";
import { auth } from "@clerk/nextjs";
import Link from "next/link";

const HomePage = () => {
  const { userId } = auth();
  // console.log(userId);
  //   // cache no-store is necessary. otherwise, you'll get the very first fetch every time--i think.

  //   // const response = await fetch('http://localhost:3000/api/contestants', { cache: 'no-store' });
  //   // const data = await response.json();
  //   // console.log(data);

  return (
    <div className="mx-5 flex flex-col justify-center items-center">
      <div className="my-10 w-full flex justify-center items-center">
        <div className="w-full flex justify-between items-center">
          <ThemeToggle />
          <Link href="/about" className="btn btn-secondary flex w-32 items-center rounded-lg ">About Page</Link>
        </div>
      </div>
      {/* <div className="hero min-h-screen ">
        <div className="hero-content text-center"> */}
      <div className="mt-32 flex justify-center items-center">
        {/* max-w-3xl */}
        <div className="max-w-3xl flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-5xl font-bold uppercase border-t-2 border-dotted text-center">
            Novel Ideas
            <p className="py-6 text-sm md:text-xl font-normal leading-loose normal-case border-t-2 border-dotted">Stop relying on sticky notes, napkins, and your "perfect" memory. Store all of your notes here.  Your book will thank you.</p>
          </h1>
          <Link href="/authors" className="btn btn-secondary flex w-32 items-center rounded-lg ">Get Started</Link>
        </div>
      </div>
      {/* </div>
      </div> */}
    </div>
  )
}
export default HomePage;
