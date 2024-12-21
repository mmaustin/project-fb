import ImageContainer from "@/components/ImageContainer";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import { IoInformationCircle } from "react-icons/io5";


const HomePage = () => {

  //mx-5 w-full flex flex-col justify-center items-center
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* <div className="my-10 w-full flex justify-center items-center">
        <div className="w-full flex justify-between items-center">
          <ThemeToggle />
        </div>
      </div> */}
      <div className="mt-32 mx-5 flex flex-col justify-center items-center">
        <div className="max-w-3xl flex flex-col justify-center items-center">
          <div className="text-3xl md:text-5xl font-semibold uppercase text-center">
            Novel Ideas
            <p className="py-6 text-sm md:text-xl font-serif leading-loose normal-case">Stop relying on sticky notes, napkins, and your "perfect" memory. Store all of your notes here.  Your book will thank you.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center">
            <Link href="/authors" className="btn btn-secondary flex w-32 items-center rounded-lg ">Get Started</Link>
            <div className="tooltip tooltip-bottom mt-10" data-tip="Outlook Is Not Recommended. May Experience Redirect Issues On Login.">
              <IoInformationCircle className="m-0" />
            </div>
          </div>
          <div className="">
            <ImageContainer />
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomePage;
