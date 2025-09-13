import { Button } from '../../../styles'
import * as S from './styles'

type Props = {
  image: string
  title: string
  description: string
  onOpen: () => void
}

const RestaurantesCard = ({ image, title, description, onOpen }: Props) => {
  function getDescription(description: string) {
    if (description.length > 134) {
      return description.slice(0, 134) + '...'
    }
    return description
  }

  return (
    <S.Card>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{getDescription(description)}</p>
      <Button type="button" onClick={onOpen}>
        Mais detalhes
      </Button>
    </S.Card>
  )
}

export default RestaurantesCard
