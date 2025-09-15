import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../styles'

import { CartContainer, CartItem, Overlay, Sidebar } from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrice } from '../../containers/CardapioList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  function closeCart() {
    dispatch(close())
  }

  function removeItem(id: number) {
    dispatch(remove(id))
  }

  function getTotalPrice() {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h4>{item.nome}</h4>
                <span>{formatPrice(item.preco)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <div>
          <span>Valor total</span>
          <span>{formatPrice(getTotalPrice())}</span>
        </div>
        <Button>Continuar com a entrega</Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
