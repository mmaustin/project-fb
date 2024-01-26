import AuthorForm from "@/components/AuthorForm";
import AuthorList from "@/components/AuthorList";

const ShowAuthors = () => {
  return (
    <div className="max-w-lg">
      <AuthorForm />
      <AuthorList />
    </div>
  )
}
export default ShowAuthors;