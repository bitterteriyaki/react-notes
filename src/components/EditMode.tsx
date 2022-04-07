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

export default EditMode
