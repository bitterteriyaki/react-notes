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

export default PreviewMode
