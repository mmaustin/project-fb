import Image from "next/image";
// import appImg from "@/public/appImg.png"
import profileForm from "@/public/profile-form.png"
import workForm from "@/public/work-form.png"
import noteForm from "@/public/note-form.png"
import monthlyNotes from "@/public/monthly-notes.png"
import categoryNotes from "@/public/category-notes.png"



const ImageContainer = () => {

  return (
    <div className="my-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full">
      <Image
        className="h-[200px] w-[300px] object-contain border border-base-300/50 hover:border-neutral-800 rounded-lg"
        src={profileForm}
        alt="create author profile form"
        priority
        height={265}
        width={198}
      />
      <Image
        className="h-[200px] w-[300px] object-contain border border-base-300/50 hover:border-neutral-800 rounded-lg"
        src={workForm}
        alt="create work form"
        priority
        height={265}
        width={198}
      />
      <Image
        className="h-[200px] w-[300px] object-contain border border-base-300/50 hover:border-neutral-800 rounded-lg"
        src={noteForm}
        alt="create a note"
        priority
        height={265}
        width={198}
      />
      <Image
        className="h-[200px] w-[300px] object-contain border border-base-300/50 hover:border-neutral-800 rounded-lg"
        src={monthlyNotes}
        alt="chart showing notes created by month"
        priority
        height={265}
        width={198}
      />
      <Image
        className="h-[200px] w-[300px] object-contain border border-base-300/50 hover:border-neutral-800 rounded-lg"
        src={categoryNotes}
        alt="graph showing notes by category"
        priority
        height={265}
        width={198}
      />
    </div>
  )
}
export default ImageContainer