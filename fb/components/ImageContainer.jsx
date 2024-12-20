import Image from "next/image";
//import pic from "@/public/gone-girl.jpg"
//import myPic from "@/public/photo.jpeg"
import appImg from "@/public/appImg.png"
import profile from "@/public/profile.png"


const ImageContainer = () => {

  return (
    <div className="my-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 w-3/4 border">
      <Image
        className="h-[200px] w-[300px] object-contain border border-green"
        src={profile}
        alt="create author profile form"
        priority
      // height={192}
      // width={192}
      />
      <Image
        className="h-[200px] w-[300px] object-contain border border-green"
        src={appImg}
        alt="create work form"
        priority
      // height={192}
      // width={192}
      />
      <Image
        className="h-[200px] w-[300px] object-contain border border-green"
        src={appImg}
        alt="create work form"
        priority
      // height={192}
      // width={192}
      />
    </div>
  )
}
export default ImageContainer