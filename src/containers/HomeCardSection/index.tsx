import Card from '../../components/Home/Card'
import { Section } from './styles'
import Prato from '../../models/Prato'

export type Props = {
  pratos: Prato[]
}

const CardSection = ({ pratos }: Props) => {
  return (
    <div className="container">
      <Section>
        {pratos.map((prato) => (
          <Card
            key={prato.id}
            image={prato.image}
            infos={prato.infos}
            title={prato.title}
            score={prato.score}
            description={prato.description}
          />
        ))}
      </Section>
    </div>
  )
}

export default CardSection
