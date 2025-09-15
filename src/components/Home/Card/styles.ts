import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ButtonTag, cores } from '../../../styles'

export const Container = styled.div`
  font-size: 14px;
  position: relative;

  > img {
    display: block;
    max-width: 100%;
    width: 472px;
    height: 217px;
    object-fit: cover;
  }

  ${ButtonTag} {
    margin-right: 8px;
  }
`

export const Content = styled.div`
  padding: 8px;
  background-color: ${cores.branco};

  div {
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
  }

  p {
    margin-bottom: 16px;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Button = styled(Link)`
  color: ${cores.laranja};
  background-color: ${cores.vermelho};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const ScoreDiv = styled.div`
  span {
    display: flex;
    font-size: 18px;
    font-weight: bold;
    margin-right: 8px;
    align-items: center;
  }
`
