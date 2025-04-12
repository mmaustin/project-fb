


const DemoWorkPage = ({ params }) => {

  console.log(params.id);

  return (
    <div>Demo Work Page for: {`${params.id}`}</div>
  )
}
export default DemoWorkPage;