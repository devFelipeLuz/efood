import { Logo } from '../../../styles'
import logo from '../../../assets/images/logo.svg'
import banner from '../../../assets/images/Vector.png'
import * as S from './styles'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store'
import { open } from '../../../store/reducers/cart'

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  function openCart() {
    dispatch(open())
  }

  return (
    <S.Header style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <nav>
          <ul>
            <li>Restaurantes</li>
            <li>
              <Link to={'/'}>
                <Logo src={logo} />
              </Link>
            </li>
            <li>
              <a onClick={openCart}>{items.length} produto(s) no carrinho</a>
            </li>
          </ul>
        </nav>
      </div>
    </S.Header>
  )
}

export default Header
