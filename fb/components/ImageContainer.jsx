import Image from "next/image";
//import pic from "@/public/gone-girl.jpg"
//import myPic from "@/public/photo.jpeg"
import appImg from "@/public/appImg.png"
import profile from "@/public/profile.png"


const ImageContainer = () => {

  return (
    <div className="my-6 bg-gray-dark/50">
      <Image
        className="h-[200px] w-[300px] object-contain"
        src={profile}
        alt="create author profile form"
        priority
      // height={192}
      // width={192}
      />
      <Image
        className="h-[200px] w-[300px] object-contain"
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