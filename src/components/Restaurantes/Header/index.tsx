import { Logo } from '../../../styles'
import logo from '../../../assets/images/logo.svg'
import banner from '../../../assets/images/Vector.png'
import * as S from './styles'

const Header = () => {
  return (
    <S.Header style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <nav>
          <ul>
            <li>Restaurantes</li>
            <li>
              <Logo src={logo} />
            </li>
            <li>0 produto(s) no carrinho</li>
          </ul>
        </nav>
      </div>
    </S.Header>
  )
}

export default Header
