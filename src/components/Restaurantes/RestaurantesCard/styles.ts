import styled from 'styled-components'
import { Button, cores } from '../../../styles'

export const Card = styled.div`
  color: ${cores.laranjaEscuro};
  background-color: ${cores.vermelho};
  padding: 8px;
  font-size: 14px;
  display: flex;
  flex-direction: column;

  img {
    margin-bottom: 8px;
    max-width: 100%;
    width: 304px;
    object-fit: cover;
    height: 167px;
  }

  h4 {
    margin-bottom: 8px;
    font-size: 16px;
  }

  p {
    margin-bottom: 8px;
    line-height: 22px;
  }

  ${Button} {
    margin-top: auto;
  }
`
