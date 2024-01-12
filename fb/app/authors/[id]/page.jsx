import WorkForm from "@/components/WorkForm";
import WorksList from "@/components/WorksList";


const AuthorPage = ({ params }) => {
  const authorParamId = params.id;
  return (
    <div>
      <p>Author's Page</p>
      <WorkForm authorId={authorParamId} />
      <WorksList authorId={authorParamId} />
    </div>
  )
}
export default AuthorPage;