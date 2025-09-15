import RestaurantesCard from '../../components/Restaurantes/RestaurantesCard'
import fechar from '../../assets/images/close.svg'
import * as S from './styles'
import { Button } from '../../styles'
import { useState } from 'react'
import { ItemCardapio } from '../../pages/Home'
import TemplateGrid from '../../components/TemplateGrid'

export type Props = {
  restaurante: ItemCardapio[]
}

export interface ModalState {
  visible: boolean
  item?: ItemCardapio
}

export function formatPrice(preco = 0) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Cardapio = ({ restaurante }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    visible: false
  })

  function openModal(item: ItemCardapio) {
    setModal({
      visible: true,
      item
    })
  }

  function closeModal() {
    setModal({
      visible: false
    })
  }

  return (
    <>
      <div className="container">
        <S.CardapioSection>
          <TemplateGrid columns={3} columnGap={40} rowGap={32}>
            {restaurante.map((p) => (
              <RestaurantesCard
                key={p.id}
                image={p.foto}
                title={p.nome}
                description={p.descricao}
                onOpen={() => openModal(p)}
              />
            ))}
          </TemplateGrid>
        </S.CardapioSection>
      </div>

      <S.Modal className={modal.visible ? 'visible' : ''}>
        {modal.item && (
          <S.ModalContent className="container">
            <img src={fechar} onClick={closeModal} />
            <div>
              <img src={modal.item.foto} alt={modal.item.nome} />
              <div>
                <h4>{modal.item.nome}</h4>
                <p>
                  {modal.item.descricao}
                  <br />
                  <br />
                  {modal.item.porcao}
                </p>
                <Button>
                  Adicionar ao carrinho - {formatPrice(modal.item.preco)}
                </Button>
              </div>
            </div>
          </S.ModalContent>
        )}
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
    </>
  )
}

export default Cardapio
