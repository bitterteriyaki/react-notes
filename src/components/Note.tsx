import styled from 'styled-components'
import { useEffect, useState } from 'react'

import PreviewMode from './PreviewMode'
import EditMode from './EditMode'

const StyledNote = styled.div`
  background-color: white;
  padding: 15px;
  margin: 15px;
  border-radius: 10px;
  min-height: 250px;
  font-family: 'Inter', sans-serif;
  box-shadow: 0px 0px 15px -12px black;
  transition: 0.15s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 15px -12px black;
  }

  & textarea {
    margin: 16px 0;
    padding: 10px;
    resize: none;
    border-radius: 10px;
    border: 1px solid #cfcccc;
    width: 100%;
    height: 150px;
    font-family: 'Inter', sans-serif;
    transition: 0.1s linear;
  }

  & textarea:focus {
    outline: none;
    border: 1px solid black; 
  }

  & button {
    cursor: pointer;
    padding: 8px 25px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: white;
    transition: 0.1s linear;
    font-family: 'Inter', sans-serif;
  }

  & button:hover {
    color: white;
    background-color: black;
  }

  & #delete {
    padding: 4px 6px;
    margin: 0;
    float: right;
    border: none;
  }
  
  & #delete:hover {
    background-color: #ffcccc;
  }
`

interface NoteProps {
  note: { createdAt: Date }
  idx: number
  deleteNote: (idx: number) => void
}

const Note: React.FC<NoteProps> = ({ idx, note, deleteNote }) => {
  const defaultString = '# Hello, world!'
  const noteName = `note-${idx}`

  const initialState = window.localStorage.getItem(noteName) || defaultString
  
  const [text, setText] = useState<string>(initialState)
  const [edit, setEdit] = useState<boolean>(false)

  useEffect(() => {
    window.localStorage.setItem(noteName, text)
    return () => { window.localStorage.removeItem(noteName) }
  }, [text])

  const toggle = () => setEdit(!edit)
  const handleText = (text: string) => setText(text)
  const handleDelete = () => deleteNote(idx)

  return (
    <StyledNote>
      {edit ? (
        <EditMode text={text} toggle={toggle} handleText={handleText} deleteNote={handleDelete} />
       ) : (
        <PreviewMode text={text} toggle={toggle} deleteNote={handleDelete} />
       )}
    </StyledNote>
  )
}

export default Note
