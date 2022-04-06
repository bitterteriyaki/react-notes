import { useState } from 'react'

interface PreviewModeProps {
  text: string
  toggle: () => void
}

const PreviewMode: React.FC<PreviewModeProps> = ({ text, toggle }) => {
  return (
    <>
      <button onClick={toggle}>Edit</button>
      <p>{text}</p>
    </>
  )
}

interface EditModeProps {
  text: string
  toggle: () => void
  handleText: (text: string) => void
}

const EditMode: React.FC<EditModeProps> = ({ text, toggle, handleText }) => {
  return (
    <>
      <button onClick={toggle}>Preview</button>
      <textarea onChange={e => handleText(e.target.value)}>{text}</textarea>
    </>
  )
}

interface NoteProps {
  idx: number
  note: INote
}

const Note: React.FC<NoteProps> = ({ idx, note }) => {
  const [text, setText] = useState<string>('Testing')
  const [edit, setEdit] = useState<boolean>(false)

  const toggle = () => setEdit(!edit)
  const handleText = (text: string) => setText(text) 

  return (
    <div>
      {edit ? <EditMode text={text} toggle={toggle} handleText={handleText} /> : <PreviewMode text={text} toggle={toggle} />}
    </div>
  )
}

interface INote {
  createdAt: Date
  edit: boolean
}

const App: React.FC = () => {
  const initialState = [{ createdAt: new Date(), edit: true }]
  const [notes, setNotes] = useState<INote[]>(initialState)

  const addNote = () => {
    const oldNotes = [...notes]
    const newNote = { createdAt: new Date(), edit: true }

    oldNotes.push(newNote)
    setNotes(oldNotes)
  }

  return (
    <section>
      <h1>React Notes</h1>
      <button onClick={addNote}>New Note</button>
      {notes.map((note, idx) => <Note idx={idx} note={note} />)}
    </section>
  )
}

export default App
