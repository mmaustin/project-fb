import { authorDelete } from "@/utils/actions";

const AuthorDelete = ({ authorId }) => {
  console.log(authorId);

  const deleteHandler = async () => {
    await authorDelete(authorId);
  }

  return (
    <button onClick={deleteHandler} className="btn btn-success" type="button">Delete</button>
  )
};
export default AuthorDelete;