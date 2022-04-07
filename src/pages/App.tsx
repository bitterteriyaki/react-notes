import { useEffect, useState } from 'react'

import Container from '../components/Container'
import Header from '../components/Header'
import Notes from '../components/Notes'

interface Note {
  createdAt: Date
}

const App: React.FC = () => {
  const initialState = JSON.parse(window.localStorage.getItem('notes') || '[]')
  const [notes, setNotes] = useState<Note[]>(initialState)

  useEffect(() => {
    window.localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const addNote = () => {
    const allNotes = [...notes]
    const newNote = { createdAt: new Date() }

    allNotes.push(newNote)
    setNotes(allNotes)
  }

  const deleteNote = (idx: number) => {
    const allNotes = [...notes]
    allNotes.splice(idx, 1)
    setNotes(allNotes)
  }

  return (
    <Container>
      <Header onClick={addNote} />
      <Notes notes={notes} deleteNote={deleteNote} />
    </Container>
  )
}

export default App
