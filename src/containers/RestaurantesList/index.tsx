import Card from '../../components/Home/Card'
import Section from '../../components/Section'
import TemplateGrid from '../../components/TemplateGrid'
import { Restaurante } from '../../pages/Home'

export type Props = {
  restaurantes: Restaurante[]
}

const RestaurantesList = ({ restaurantes }: Props) => {
  return (
    <Section>
      <TemplateGrid columns={2} columnGap={80} rowGap={48}>
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
      </TemplateGrid>
    </Section>
  )
}

export default RestaurantesList
