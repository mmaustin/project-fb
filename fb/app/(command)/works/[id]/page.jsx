import { getSingleWork } from "@/utils/actions";


const SingleWorkPage = async ({ params }) => {
  const work = params.id;
  console.log(work);

  return (
    <div>This is where notes will be made.</div>
  )
}
export default SingleWorkPage;