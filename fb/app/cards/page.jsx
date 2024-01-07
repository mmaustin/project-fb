import { getContestants } from "@/utils/actions";
import { connectToDB } from "@/utils/database";


const ShowCards = async () => {

  //connectToDB is definitely needed when using an http handler
  await connectToDB();
  const contestants = await getContestants();

  // const response = await fetch('http://localhost:3000/api/contestants');
  // const data = await response.json();
  // console.log(data);

  return (
    <div>
      <p>Contestants Page</p>
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