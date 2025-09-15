import styled from 'styled-components'
import { cores } from '../../styles'
import lixo from '../../assets/images/lixeira-de-reciclagem.svg'

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
  background-color: ${cores.vermelho};
  z-index: 1;
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0 8px;

  > div {
    margin-top: 26px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;

    span {
      font-weight: bold;
      font-size: 14px;
      color: ${cores.laranjaEscuro};
    }
  }
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  background-color: ${cores.laranjaEscuro};
  padding: 8px;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h4 {
    font-size: 18px;
    font-weight: 900%;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
  }

  button {
    background-image: url(${lixo});
    background-color: transparent;
    border: none;
    width: 16px;
    height: 16px;
    cursor: pointer;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`
