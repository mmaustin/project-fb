import Image from "next/image";
// import appImg from "@/public/appImg.png"
import profileForm from "@/public/new-profile-form.png"
import workForm from "@/public/work-form.png"
import noteForm from "@/public/note-form.png"
import monthlyNotes from "@/public/monthly-notes.png"
import categoryNotes from "@/public/category-notes.png"
import themeControl from "@/public/new-theme-control.png"



const ImageContainer = () => {

  return (
    <div className="my-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full">
      <div className="rounded-lg">
        <h2 className="text-xs font-serif">Profile Form</h2>
        <Image
          className="h-[200px] w-[300px] object-contain border border-base-300/50 hover:border-neutral-800 rounded-lg"
          src={profileForm}
          alt="create author profile form"
          priority
          height={265}
          width={198}
        />
      </div>
      <div className="rounded-lg">
        <h2 className="text-xs font-serif">Work Form</h2>
        <Image
          className="h-[200px] w-[300px] object-contain border border-base-300/50 hover:border-neutral-800 rounded-lg"
          src={workForm}
          alt="create work form"
          priority
          height={265}
          width={198}
        />
      </div>
      <div className="rounded-lg">
        <h2 className="text-xs font-serif">Note Form</h2>
        <Image
          className="h-[200px] w-[300px] object-contain border border-base-300/50 hover:border-neutral-800 rounded-lg"
          src={noteForm}
          alt="create a note"
          priority
          height={265}
          width={198}
        />
      </div>
      <div className="rounded-lg">
        <h2 className="text-xs font-serif">Notes By Month</h2>
        <Image
          className="h-[200px] w-[300px] object-contain border border-base-300/50 hover:border-neutral-800 rounded-lg"
          src={monthlyNotes}
          alt="chart showing notes created by month"
          priority
          height={265}
          width={198}
        />
      </div>
      <div className="rounded-lg">
        <h2 className="text-xs font-serif">Notes Chart</h2>
        <Image
          className="h-[200px] w-[300px] object-contain border border-base-300/50 hover:border-neutral-800 rounded-lg"
          src={categoryNotes}
          alt="graph showing notes by category"
          priority
          height={265}
          width={198}
        />
      </div>
      <div className="rounded-lg">
        <h2 className="text-xs font-serif">Theme Toggle</h2>
        <Image
          className="h-[200px] w-[300px] bg-neutral-900 object-contain border border-base-300/50 hover:border-blue rounded-lg"
          src={themeControl}
          alt="preview of control panel"
          priority
          height={265}
          width={198}
        />
      </div>
    </div>
  )
}
export default ImageContainer