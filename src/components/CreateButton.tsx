import styled from 'styled-components'

const StyledButton = styled.button`
  cursor: pointer;
  border: 1px solid black;
  padding: 15px 35px;
  transition: 0.1s linear;
  border-radius: 10px;
  background-color: #f2f2f2;
  font-family: 'Inter', sans-serif;

  &:hover {
    background-color: black;
    color: white;
  }
`

interface CreateButtonProps {
  onClick: () => void
}

const CreateButton: React.FC<CreateButtonProps> = ({ onClick }) => {
  return <StyledButton onClick={onClick}>New Note</StyledButton>
}

export default CreateButton
