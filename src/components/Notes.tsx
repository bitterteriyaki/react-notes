import styled from 'styled-components'

import Note from './Note'

const StyledNotes = styled.div`
  /* background-color: red; */
  display: flex;
  flex-wrap: wrap;
  padding: 12px;
  margin-top: 25px;
`

interface NotesProps {
  notes: { createdAt: Date }[]
}

const Notes: React.FC<NotesProps> = ({ notes }) => {
  return (
    <StyledNotes>
      {notes.map((note, idx) => <Note note={note} idx={idx} />)}
    </StyledNotes>
  )
}

export default Notes
