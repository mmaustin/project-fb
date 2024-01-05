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
    <div className="shadow-zinc-950 opacity-35">
      <h1 className="text-3xl">Home Page Page</h1>
    </div>

  )
}
export default HomePage;
