
import Link from "next/link";


const HomePage = () => {
  //   // cache no-store is necessary. otherwise, you'll get the very first fetch every time--i think.

  //   // const response = await fetch('http://localhost:3000/api/contestants', { cache: 'no-store' });
  //   // const data = await response.json();
  //   // console.log(data);

  return (
    <div className="hero min-h-screen bg-">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold ">
            <p className="py-6 text-3xl leading-loose">Welcome, Writers!  Never Forget An Idea Again!!</p>
            <Link href="/authors" className="btn btn-secondary">Enter The Center</Link>
          </h1>
        </div>
      </div>
    </div>
  )
}
export default HomePage;
