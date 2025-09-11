import styled from 'styled-components'
import { Logo } from '../../../styles'

export const Header = styled.header`
  padding: 64px;
  font-size: 18px;
  font-weight: bold;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${Logo} {
    margin: 0;
  }
`
