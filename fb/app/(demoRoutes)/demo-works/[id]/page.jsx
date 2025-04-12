import { getDemoWork } from "@/utils/demoActions";


const DemoWorkPage = async ({ params }) => {

  const work = await getDemoWork(params.id);
  console.log(work);


  return (
    <div>Demo Work Page for: {`${params.id}`}</div>
  )
}
export default DemoWorkPage;