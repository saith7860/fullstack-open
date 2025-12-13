import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('');
  const[showAll,setShowAll]=useState(true);
  //toggle importance 
    const toggleImportanceOf = (id) => {
    console.log('importance of ' + id + ' needs to be toggled')
  }
  //Event handler to add notes
  const addNote = (event) => {
  event.preventDefault()
  const noteObject = {
    content: newNote,
    important: Math.random() > 0.5
  }
     axios.post('http://localhost:3001/notes', noteObject)
    .then(response => {
      // response.data is the saved note (with id added by json-server)
      setNotes(notes.concat(response.data))
      setNewNote('')
    })
    .catch(err => console.error(err))
}

  useEffect(() => {
    console.log('effect')                       // printed after first render
    axios.get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)                  // set state -> triggers re-render
      })
      .catch(err => console.error(err))
  }, []) 

// post request

  return (
    <div>
      <h1>Notes</h1>
         <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      {notes.map(n => 
      <Note key={n.id} note={n} toggleImportanceOf={()=>toggleImportanceOf(n.id)} />
      )}
      <form action="" onSubmit={addNote}>
      <input type="text" value={newNote} onChange={(e)=>setNewNote(e.target.value)} />
      <button type='submit'>Add</button>
      </form>
      {/* input + button to add new note */}
    </div>
  )
}

export default App;
