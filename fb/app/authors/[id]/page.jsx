import WorkForm from "@/components/WorkForm";


const AuthorPage = ({ params }) => {
  const authorParamId = params.id;
  return (
    <div>
      <p>Author's Page</p>
      <WorkForm authorId={authorParamId} />
    </div>
  )
}
export default AuthorPage;