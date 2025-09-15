import styled from 'styled-components'
import { Button, cores } from '../../styles'
import Section from '../../components/Section'

export const CardapioSection = styled(Section)`
  padding-top: 56px;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  lef: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  justify-content: center;
  align-items: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 8px;

  color: ${cores.branco};
  background-color: ${cores.vermelho};

  font-size: 14px;

  > img {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }

  > div {
    display: flex;
    padding: 32px;

    img {
      width: 280px;
      height: 280px;
      object-fit: cover;
      margin-right: 24px;
    }

    > div {
      h4 {
        margin-bottom: 16px;
        font-size: 18px;
        font-weight: 900;
      }

      p {
        margin-bottom: 16px;
        line-height: 22px;
      }

      ${Button} {
        width: auto;
        padding: 4px 8px;
      }
    }
  }
`
