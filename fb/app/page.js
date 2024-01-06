import { getContestants } from '@/utils/actions';
import { connectToDB } from '@/utils/database';
//import Image from 'next/image';


const HomePage = async () => {

  // try {
  //   await connectToDB();

  // const response = await fetch('http://localhost:3000/api/contestants');
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
    // <div className="shadow-zinc-950 opacity-35">
    //   <h1 className="text-3xl">Home Page Page</h1>
    // </div>
    <>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
    </>

  )
}
export default HomePage;
