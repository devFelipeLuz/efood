import styled from 'styled-components'
import lixo from '../../../assets/images/lixeira-de-reciclagem.svg'
import { cores } from '../../../styles'

export const ProductCart = styled.div`
  display: block;
`

export const PriceContent = styled.div`
  margin-top: 26px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;

  span {
    font-weight: bold;
    font-size: 14px;
    color: ${cores.laranjaEscuro};
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
