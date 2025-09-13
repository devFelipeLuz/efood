import Card from '../../components/Home/Card'
import { Restaurante } from '../../pages/Home'
import { Section } from './styles'

export type Props = {
  restaurantes: Restaurante[]
}

const CardSection = ({ restaurantes }: Props) => {
  return (
    <div className="container">
      <Section>
        {restaurantes.map((prato) => (
          <Card
            key={prato.id}
            id={prato.id}
            image={prato.capa}
            destacado={prato.destacado}
            tipo={prato.tipo}
            title={prato.titulo}
            score={prato.avaliacao}
            description={prato.descricao}
          />
        ))}
      </Section>
    </div>
  )
}

export default CardSection
