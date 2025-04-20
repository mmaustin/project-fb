import ImageContainer from "@/components/ImageContainer";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import { IoInformationCircle } from "react-icons/io5";


const HomePage = () => {

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="mt-16 mx-5 flex flex-col justify-center items-center">
        <div className="max-w-3xl flex flex-col justify-center items-center">
          <div className="text-3xl md:text-5xl font-semibold uppercase text-center">
            Novel Ideas
            <p className="m-6 text-sm md:text-xl font-serif leading-loose normal-case">Stop relying on sticky notes, napkins, and your "perfect" memory. Store all of your notes here.  Your book will thank you.</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Link href="/authors" className="btn btn-secondary btn-circle btn-sm flex w-24 items-center text-neutral-50 hover:text-success hover:bg-neutral-950 mb-4">
              Log In
            </Link>
            <Link href="/demo-authors" className="btn btn-secondary btn-circle btn-sm flex w-24 items-center text-neutral-50 hover:text-success hover:bg-neutral-950">
              Demo
            </Link>
          </div>
          <div className="mt-7">
            <ImageContainer />
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomePage;
