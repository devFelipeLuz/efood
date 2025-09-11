import styled from 'styled-components'
import { cores } from '../../../styles'

export const Card = styled.div`
  color: ${cores.laranjaEscuro};
  background-color: ${cores.vermelho};
  padding: 8px;
  font-size: 14px;

  img {
    margin-bottom: 8px;
  }

  h4 {
    margin-bottom: 8px;
    font-size: 16px;
  }

  p {
    margin-bottom: 8px;
  }

  button {
    display: block;
    color: ${cores.vermelho};
    background-color: ${cores.laranjaEscuro};
    padding: 4px 84px;
    border: none;
    font-weight: bold;
    cursor: pointer;
    width: 100%;
  }
`
