import * as S from './syles'

type Props = {
  restaurante: Restaurante
}

const Hero = ({ restaurante }: Props) => {
  return (
    <S.Section style={{ backgroundImage: `url(${restaurante.capa})` }}>
      <div className="container">
        <span>Restaurante</span>
        <h4>{restaurante.titulo}</h4>
      </div>
    </S.Section>
  )
}

export default Hero
