import styled from 'styled-components'
import { cores, Logo } from '../../styles'

export const Section = styled.section`
  background-color: ${cores.laranjaEscuro};
  padding: 40px 0;

  p {
    text-align: center;
    font-size: 10px;
  }

  ${Logo} {
    margin-bottom: 32px;
  }
`

export const List = styled.ul`
  display: flex;
  margin-bottom: 80px;
  gap: 8px;
`

export const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
