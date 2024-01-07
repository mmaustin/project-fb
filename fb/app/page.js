import { getContestants } from '@/utils/actions';
import { connectToDB } from '@/utils/database';
//import Image from 'next/image';


const HomePage = async () => {

  // try {
  // await connectToDB();

  // cache no-store is necessary unless you'll get the very first fetch every time--i think

  // const response = await fetch('http://localhost:3000/api/contestants', { cache: 'no-store' });
  // const data = await response.json();
  // console.log(data);

  //   let contestants = await getContestants();
  //   if (contestants) {
  //     console.log(contestants);;
  //   } else {
  //     console.log('no');;
  //   }
  // } catch (error) {
  //   console.log(error);
  // }

  return (
    <div className="shadow-2xl shadow-cyan-500  bg-cyan-500">
      <h1 className="text-2xl">Home Page</h1>
    </div>
  )
}
export default HomePage;
