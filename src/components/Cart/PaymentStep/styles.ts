import styled from 'styled-components'
import { Button, cores } from '../../../styles'

export const PaymentContainer = styled.section`
  display: block;
  color: ${cores.laranjaEscuro};

  form {
    margin-bottom: 24px;
  }

  h4 {
    margin-bottom: 16px;
  }

  ${Button} {
    margin-bottom: 8px;
    padding: 4px 0;
    height: 24px;
  }
`
