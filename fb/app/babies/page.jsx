import { getBabies } from "@/utils/actions";


const Babies = async () => {

  const allBabies = await getBabies();
  console.log(allBabies);

  return (
    <div>
      <h3>Baby Baby Baby!</h3>
    </div>
  )
}
export default Babies;