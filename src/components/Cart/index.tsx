import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import CartStep from './CartStep'
import DeliveryStep from './DeliveryStep'
import PaymentStep from './PaymentStep'
import SuccessStep from './SuccessStep'

import { clear, close, remove } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import { CartContainer, Overlay, Sidebar } from './styles'
import { usePurchaseMutation } from '../../services/api'

type BuyStep = 'cart' | 'delivery' | 'payment' | 'success'

const Cart = () => {
  const { isOpen: isOpenCart, items } = useSelector(
    (state: RootReducer) => state.cart
  )
  const [buyState, setBuyState] = useState<BuyStep>('cart')
  const [deliveryData, setDeliveryData] = useState<DeliveryValues | null>(null)
  const dispatch = useDispatch()
  const [purchase, { data }] = usePurchaseMutation()

  function closeCart() {
    dispatch(close())
  }

  function removeItem(id: number) {
    dispatch(remove(id))
  }

  function clearAll() {
    dispatch(clear())
    setDeliveryData(null)
    setBuyState('cart')
    closeCart()
  }

  function getTotalPrice() {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpenCart ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length > 0 ? (
          <>
            {buyState === 'cart' && (
              <CartStep
                items={items}
                onNext={() => setBuyState('delivery')}
                onRemove={removeItem}
                getTotalPrice={getTotalPrice}
              />
            )}
            {buyState === 'delivery' && (
              <DeliveryStep
                onNext={(values) => {
                  setDeliveryData(values)
                  setBuyState('payment')
                }}
                onBack={() => setBuyState('cart')}
              />
            )}
            {buyState === 'payment' && deliveryData && (
              <PaymentStep
                items={items}
                getTotalPrice={getTotalPrice}
                onBack={() => setBuyState('delivery')}
                finalizePurchase={(values) => {
                  if (!deliveryData) return

                  const payload = {
                    products: items.map((item) => ({
                      id: item.id,
                      price: item.preco
                    })),
                    delivery: {
                      receiver: deliveryData.name,
                      address: {
                        description: deliveryData.address,
                        city: deliveryData.city,
                        zipCode: deliveryData.cep,
                        number: Number(deliveryData.number),
                        complement: deliveryData.complement
                      }
                    },
                    payment: {
                      card: {
                        name: values.cardDisplayName,
                        number: values.cardNumber,
                        code: Number(values.cardCode),
                        expires: {
                          month: Number(values.expiresMonth),
                          year: Number(values.expiresYear)
                        }
                      }
                    }
                  }
                  purchase(payload)
                  setBuyState('success')
                }}
              />
            )}
            {buyState === 'success' && (
              <SuccessStep orderId={data?.orderId} onFinish={clearAll} />
            )}
          </>
        ) : (
          <p className="empty-message">
            O carrinho está vazio! Adicione algum produto para continuar com a
            compra.
          </p>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
