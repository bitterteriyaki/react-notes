import styled from 'styled-components'

import CreateButton from './CreateButton'

const StyledHeader = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 630px;
  align-items: center;
  justify-content: space-between;
  font-family: 'Inter', sans-serif;
`

interface HeaderProps {
  onClick: () => void
}

const Header: React.FC<HeaderProps> = ({ onClick }) => {
  return (
    <StyledHeader>
      <h1>React Notes</h1>
      <CreateButton onClick={onClick} />
    </StyledHeader>
  )
}

export default Header
