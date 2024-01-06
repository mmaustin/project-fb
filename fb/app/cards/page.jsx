import { getContestants } from "@/utils/actions";
import { connectToDB } from "@/utils/database";


const ShowCards = async () => {

  //connectToDB is definitely needed when using an http handler
  await connectToDB();
  const contestants = await getContestants();

  return (
    <div>
      {contestants.map(c => {
        return (
          <p key={c._id}>
            {c.name}
          </p>
        )
      })}
    </div>
  )
}
export default ShowCards