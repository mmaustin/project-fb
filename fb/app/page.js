import { getContestants } from '@/utils/actions';
import { connectToDB } from '@/utils/database';
//import Image from 'next/image';


const HomePage = async () => {

  try {
    //await connectToDB();
    const response = await fetch('http://localhost:3000/api/contestants');
    const data = await response.json();
    console.log(data);
    // let contestants = await getContestants();
    // if (contestants) {
    //   console.log(contestants);;
    // } else {
    //   console.log('no');;
    // }
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
