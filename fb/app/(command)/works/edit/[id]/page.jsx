import EditWorkForm from "@/components/EditWorkForm";
import { getSingleWork } from "@/utils/actions";


const EditWork = async ({ params }) => {
  const work = await getSingleWork(params.id);


  return (
    <>
      <EditWorkForm />
    </>
  )
}
export default EditWork;