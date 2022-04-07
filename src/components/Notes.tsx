import styled from 'styled-components'

import Note from './Note'

const StyledNotes = styled.div`
  padding: 12px;
  margin-top: 25px;
`

interface NotesProps {
  notes: { createdAt: Date }[]
  deleteNote: (idx: number) => void
}

const Notes: React.FC<NotesProps> = ({ notes, deleteNote }) => {
  return (
    <StyledNotes>
      {notes.map((note, idx) => <Note note={note} idx={idx} deleteNote={deleteNote} />)}
    </StyledNotes>
  )
}

export default Notes
