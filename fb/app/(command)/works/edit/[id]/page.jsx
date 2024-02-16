import EditWorkForm from "@/components/EditWorkForm";
import { getSingleWork } from "@/utils/actions";


const EditWork = async ({ params }) => {
  const work = await getSingleWork();
  console.log(work);

  return (
    <>
      <EditWorkForm />
    </>
  )
}
export default EditWork;