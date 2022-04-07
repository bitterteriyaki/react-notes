import { ReactComponent as Trash } from '../svgs/trash.svg'

interface EditModeProps {
  text: string
  toggle: () => void
  handleText: (text: string) => void
  deleteNote: () => void
}

const EditMode: React.FC<EditModeProps> = ({ text, toggle, handleText, deleteNote }) => {
  return (
    <>
      <div>
        <button onClick={toggle}>Preview</button>
        <button id='delete' onClick={deleteNote}><Trash /></button>
      </div>
      <textarea onChange={e => handleText(e.target.value)}>{text}</textarea>
    </>
  )
}

export default EditMode
