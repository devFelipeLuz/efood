import estrela from '../../../assets/images/estrela.svg'
import Tag from '../../Tag'
import { Button, Container, Content, Infos, ScoreDiv, Title } from './styles'

type Props = {
  image: string
  tipo: string
  destacado: boolean
  title: string
  score: number
  description: string
  id: number
}

const Card = ({
  image,
  tipo,
  title,
  score,
  description,
  id,
  destacado
}: Props) => {
  function getDescription(description: string) {
    if (description.length > 245) {
      return description.slice(0, 243) + '...'
    }
    return description
  }

  return (
    <Container>
      <img src={image} alt={title} />
      <Infos>
        {destacado ? (
          <>
            <Tag>Destaque da semana</Tag>
            <Tag>{tipo}</Tag>
          </>
        ) : (
          <Tag>{tipo}</Tag>
        )}
      </Infos>
      <Content>
        <div>
          <Title>{title}</Title>
          <ScoreDiv>
            <span>{score}</span>
            <img src={estrela} alt="estrela" />
          </ScoreDiv>
        </div>
        <p>{getDescription(description)}</p>
        <Button to={`/restaurantes/${id}`}>Saiba mais</Button>
      </Content>
    </Container>
  )
}

export default Card
