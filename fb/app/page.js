import ImageContainer from "@/components/ImageContainer";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import { IoInformationCircle } from "react-icons/io5";


const HomePage = () => {

  //mx-5 w-full flex flex-col justify-center items-center
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="mt-32 mx-5 flex flex-col justify-center items-center">
        <div className="max-w-3xl flex flex-col justify-center items-center">
          <div className="text-3xl md:text-5xl font-semibold uppercase text-center">
            Novel Ideas
            <p className="m-6 text-sm md:text-xl font-serif leading-loose normal-case">Stop relying on sticky notes, napkins, and your "perfect" memory. Store all of your notes here.  Your book will thank you.</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Link href="/authors" className="btn btn-secondary flex w-24 items-center rounded-lg ">Get Started</Link>
            {/* <div className="tooltip tooltip-bottom mt-1 border" data-tip="Outlook Is Not Recommended. May Experience Redirect Issues On Login.">
              <IoInformationCircle className="m-0" />
            </div> */}
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
