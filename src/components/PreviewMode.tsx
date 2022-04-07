import { ReactComponent as Trash } from '../svgs/trash.svg'

interface PreviewModeProps {
  text: string
  toggle: () => void
  deleteNote: () => void
}

const PreviewMode: React.FC<PreviewModeProps> = ({ text, toggle, deleteNote }) => {
  return (
    <>
      <div>
        <button onClick={toggle}>Edit</button>
        <button id='delete' onClick={deleteNote}><Trash /></button>
      </div>
      <p>{text}</p>
    </>
  )
}

export default PreviewMode
