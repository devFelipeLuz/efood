import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  laranja: '#FFF8F2',
  laranjaEscuro: '#FFEBD9',
  vermelho: '#E66767',
  branco: '#FFFFFF'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.laranja};
    color: ${cores.vermelho};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export const ButtonTag = styled.div`
  color: ${cores.laranja};
  background-color: ${cores.vermelho};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
`

export const Logo = styled.img`
  width: 125px;
  height: 56px;
  margin-bottom: 136px;
`

export const Button = styled.button`
  display: block;
  color: ${cores.vermelho};
  background-color: ${cores.laranjaEscuro};
  padding: 4px 84px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
`
