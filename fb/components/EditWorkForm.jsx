"use client"


const EditWorkForm = ({ workToEdit }) => {

  const { title, genre, synopsis, authorName, authUser, writingStage, createdBy } = workToEdit;

  return (
    <div>{workToEdit.title}</div>
  )
}
export default EditWorkForm;