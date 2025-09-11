import { Section } from './styles'
import bannerImg from '../../../assets/images/Vector.png'
import logo from '../../../assets/images/logo.svg'
import { Logo } from '../../../styles'

const Banner = () => (
  <Section style={{ backgroundImage: `url(${bannerImg})` }}>
    <div>
      <Logo src={logo} alt="logo" />
      <p>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </p>
    </div>
  </Section>
)

export default Banner
