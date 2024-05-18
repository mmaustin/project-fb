import ThemeToggle from "@/components/ThemeToggle";
import { auth } from "@clerk/nextjs";
import Link from "next/link";

const HomePage = () => {
  const { userId } = auth();

  return (
    <div className="mx-5 flex flex-col justify-center items-center">
      <div className="my-10 w-full flex justify-center items-center">
        <div className="w-full flex justify-between items-center">
          <ThemeToggle />
        </div>
      </div>
      <div className="mt-32 flex justify-center items-center">
        <div className="max-w-3xl flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-5xl font-bold uppercase border-t-2 border-dotted text-center">
            Novel Ideas
            <p className="py-6 text-sm md:text-xl font-normal leading-loose normal-case border-t-2 border-dotted">Stop relying on sticky notes, napkins, and your "perfect" memory. Store all of your notes here.  Your book will thank you.</p>
          </h1>
          <Link href="/authors" className="btn btn-secondary flex w-32 items-center rounded-lg ">Get Started</Link>
        </div>
      </div>
    </div>
  )
}
export default HomePage;
