

const AuthorPage = ({ params }) => {
  const authorId = params.id;
  return (
    <div>
      <p>Author's Page</p>
      {authorId}
    </div>
  )
}
export default AuthorPage;