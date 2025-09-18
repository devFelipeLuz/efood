import styled from 'styled-components'
import { cores } from '../../styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const Sidebar = styled.aside`
  display: block;
  background-color: ${cores.vermelho};
  z-index: 1;
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0 8px;

  .empty-message {
    font-size: 14px;
    line-height: 22px;
    color: ${cores.branco};
    text-align: center;
  }

  .invisible {
    display: none;
  }
`

export const InputGroup = styled.div`
  margin-bottom: 8px;
  font-size: 14px;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 8px;
  }

  input {
    display: block;
    width: 100%;
    padding: 8px;
    height: 32px;
    background-color: ${cores.laranjaEscuro};
    border: none;
    font-weight: bold;

    &.error {
      border: 2px solid darkblue;
    }
  }
`

export const FlexInput = styled.div`
  display: flex;
  justify-content: space-between;

  ${InputGroup} {
    input {
      max-width: 155px;
      width: 100%;
    }
  }

  #cardNumber {
    max-width: 240px;
  }

  #cardCode {
    max-width: 88px;
  }
`
