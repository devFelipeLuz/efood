import macarrao from '../../../assets/images/macarrao_hero.png'
import * as S from './syles'

const Hero = () => {
  return (
    <S.Section style={{ backgroundImage: `url(${macarrao})` }}>
      <div className="container">
        <span>Italiana</span>
        <h4>La Dolce Vita Trattoria</h4>
      </div>
    </S.Section>
  )
}

export default Hero
