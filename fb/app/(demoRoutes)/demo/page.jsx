import { getSingleDemoAuthor } from "@/utils/demoActions";



const DemoPage = async () => {

  const author = await getSingleDemoAuthor();


  return (
    <div>
      <p>{author.authorName}</p>
      <p>{author.aboutMe}</p>
      <p>{author.authorInfluence}</p>
      <p>{author.workInfluence}</p>
    </div>
  )
}
export default DemoPage;