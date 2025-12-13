import React from 'react'

const Note = ({note,toggleImportanceOf}) => {
    console.log(note);
    
  return (
<div>{note.content}</div>
  )
}

export default Note;