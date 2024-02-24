'use client'

import { globalDelete } from "@/utils/actions";


const GlobalDelete = () => {

  const deleteHandler = () => {
    globalDelete();
  }

  return (
    <button onClick={deleteHandler} className="btn btn-primary join-item" type="button">Delete</button>
  )
}
export default GlobalDelete