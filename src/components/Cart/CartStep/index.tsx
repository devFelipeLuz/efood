import { Button } from '../../../styles'
import { formatPrice } from '../../../utils'
import { CartItem, PriceContent, ProductCart } from './styles'

type CartStepProps = {
  items: ItemCardapio[]
  onNext: () => void
  onRemove: (id: number) => void
  getTotalPrice: (items: ItemCardapio[]) => number
}

const CartStep = ({
  items,
  onNext,
  onRemove,
  getTotalPrice
}: CartStepProps) => {
  return (
    <ProductCart>
      <ul>
        {items.map((item) => (
          <CartItem key={item.id}>
            <img src={item.foto} alt={item.nome} />
            <div>
              <h4>{item.nome}</h4>
              <span>{formatPrice(item.preco)}</span>
            </div>
            <button type="button" onClick={() => onRemove(item.id)} />
          </CartItem>
        ))}
      </ul>
      <PriceContent>
        <span>Valor total</span>
        <span>{formatPrice(getTotalPrice(items))}</span>
      </PriceContent>
      <Button onClick={onNext}>Continuar para a entrega</Button>
    </ProductCart>
  )
}

export default CartStep
