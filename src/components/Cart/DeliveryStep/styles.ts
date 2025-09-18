import styled from 'styled-components'
import { Button, cores } from '../../../styles'

export const CheckoutCart = styled.div`
  display: block;
  color: ${cores.laranjaEscuro};

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  form {
    margin-bottom: 24px;
  }

  ${Button} {
    margin-bottom: 8px;
  }
`
