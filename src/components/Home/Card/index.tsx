import estrela from '../../../assets/images/estrela.svg'
import Tag from '../../Tag'
import { Button, Container, Content, Infos, ScoreDiv, Title } from './styles'

type Props = {
  image: string
  infos: string[]
  title: string
  score: string
  description: string
}

const Card = ({ image, infos, title, score, description }: Props) => {
  return (
    <Container>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Content>
        <div>
          <Title>{title}</Title>
          <ScoreDiv>
            <span>{score}</span>
            <img src={estrela} alt="estrela" />
          </ScoreDiv>
        </div>
        <p>{description}</p>
        <Button to="/restaurantes">Saiba mais</Button>
      </Content>
    </Container>
  )
}

export default Card
