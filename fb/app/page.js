import { connectToDB } from '@/utils/database';
//import Image from 'next/image';


const HomePage = async () => {

  try {
    let db = await connectToDB();
    console.log(db);
  } catch (error) {
    console.log(error);
  }

  return (
    <div >Home Page</div>
  )
}
export default HomePage
