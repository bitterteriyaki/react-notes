import styled from 'styled-components'
import { useState } from 'react'

import PreviewMode from './PreviewMode'
import EditMode from './EditMode'

const StyledNote = styled.div`
  margin: 12px;
  flex: 1 1 350px;
  padding: 20px 25px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 15px -12px black;
  transition: 0.15s ease-out;
  font-family: 'Inter', sans-serif;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 15px -12px black;
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

  & p {
    width: 100%;
    height: 160px;
    overflow-wrap: break-word;
  }

  & textarea {
    margin: 16px 0;
    padding: 15px;
    resize: none;
    border-radius: 10px;
    border: 1px solid #cfcccc;
    transition: 0.1s linear;
    font-family: 'Inter', sans-serif;
    width: 100%;
  }

  & textarea:focus {
    outline: none;
    border: 1px solid black;
  }
`

interface NoteProps {
  note: { createdAt: Date }
  idx: number
}

const Note: React.FC<NoteProps> = ({ idx, note }) => {
  const [text, setText] = useState<string>('Testing')
  const [edit, setEdit] = useState<boolean>(false)

  const toggle = () => setEdit(!edit)
  const handleText = (text: string) => setText(text)

  return (
    <StyledNote>
      {edit ? <EditMode text={text} toggle={toggle} handleText={handleText}  /> : <PreviewMode text={text} toggle={toggle} />}
    </StyledNote>
  )
}

export default Note
