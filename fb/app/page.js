import { getContestants } from '@/utils/actions';
import { connectToDB } from '@/utils/database';
//import Image from 'next/image';


const HomePage = async () => {

  try {
    await connectToDB();
    let contestants = await getContestants();
    if (contestants) {
      console.log(contestants);;
    } else {
      console.log('no');;
    }
    //console.log(db);
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="shadow-zinc-950 opacity-35">
      <h1 className="text-3xl">Home Page Page</h1>
    </div>

  )
}
export default HomePage;
