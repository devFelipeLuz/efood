import RestaurantesCard from '../../components/Restaurantes/RestaurantesCard'
import Pizza from '../../models/Pizza'
import * as S from './styles'

export type Props = {
  pizzas: Pizza[]
}

const RestaurantesCardSection = ({ pizzas }: Props) => {
  return (
    <div className="container">
      <S.Section>
        {pizzas.map((p) => (
          <RestaurantesCard
            key={p.id}
            image={p.image}
            title={p.title}
            description={p.description}
          />
        ))}
      </S.Section>
    </div>
  )
}

export default RestaurantesCardSection
