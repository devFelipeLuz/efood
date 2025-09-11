import * as S from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const RestaurantesCard = ({ image, title, description }: Props) => {
  return (
    <S.Card>
      <img src={image} alt="pizza" />
      <h4>{title}</h4>
      <p>{description}</p>
      <button type="button">Adcionar ao carrinho</button>
    </S.Card>
  )
}

export default RestaurantesCard
