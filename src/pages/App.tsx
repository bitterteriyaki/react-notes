// import styled from 'styled-components'
// import { useState } from 'react'

// import '../styles/App.css'

// const StyledButton = styled.button`
//   font-family: 'Inter', sans-serif;
//   background-color: white;
//   border: 1px solid black;
//   padding: 15px 35px;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: 0.1s linear;

//   &:hover {
//     background-color: black;
//     color: white;
//   }
// `

// interface PreviewModeProps {
//   text: string
//   toggle: () => void
// }

// const PreviewMode: React.FC<PreviewModeProps> = ({ text, toggle }) => {
//   return (
//     <>
//       <button onClick={toggle}>Edit</button>
//       <p>{text}</p>
//     </>
//   )
// }

// interface EditModeProps {
//   text: string
//   toggle: () => void
//   handleText: (text: string) => void
// }

// const EditMode: React.FC<EditModeProps> = ({ text, toggle, handleText }) => {
//   return (
//     <>
//       <button onClick={toggle}>Preview</button>
//       <textarea onChange={e => handleText(e.target.value)}>{text}</textarea>
//     </>
//   )
// }

// interface NoteProps {
//   idx: number
//   note: INote
// }

// const Note: React.FC<NoteProps> = ({ idx, note }) => {
//   const [text, setText] = useState<string>('Testing')
//   const [edit, setEdit] = useState<boolean>(false)

//   const toggle = () => setEdit(!edit)
//   const handleText = (text: string) => setText(text) 

//   return (
//     <div>
//       {edit ? <EditMode text={text} toggle={toggle} handleText={handleText} /> : <PreviewMode text={text} toggle={toggle} />}
//     </div>
//   )
// }

// interface INote {
//   createdAt: Date
//   edit: boolean
// }

// const App: React.FC = () => {
//   const initialState = [{ createdAt: new Date(), edit: true }]
//   const [notes, setNotes] = useState<INote[]>(initialState)

//   const addNote = () => {
//     const oldNotes = [...notes]
//     const newNote = { createdAt: new Date(), edit: true }

//     oldNotes.push(newNote)
//     setNotes(oldNotes)
//   }

//   return (
//     <section className='container'>
//       <div className='header'>
//         <h1>React Notes</h1>
//         <StyledButton id='new-note' onClick={addNote}>New Note</StyledButton>
//       </div>
//       <div>
//         {notes.map((note, idx) => <Note idx={idx} note={note} />)}
//       </div>
//     </section>
//   )
// }

import { useState } from 'react'

import Container from '../components/Container'
import Header from '../components/Header'
import Notes from '../components/Notes'

interface Note {
  createdAt: Date
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([])

  const addNote = () => {
    const allNotes = [...notes]
    const newNote = { createdAt: new Date() }

    allNotes.push(newNote)
    setNotes(allNotes)
  }

  return (
    <Container>
      <Header onClick={addNote} />
      <Notes notes={notes} />
    </Container>
  )
}

export default App
