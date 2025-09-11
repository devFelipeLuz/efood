import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import { FooterDiv, List, Section } from './styles'
import { Logo } from '../../styles'

const Footer = () => {
  return (
    <Section>
      <div className="container">
        <FooterDiv>
          <Logo src={logo} alt="logo efood" />
          <List>
            <li>
              <img src={instagram} alt="instagram" />
            </li>
            <li>
              <img src={facebook} alt="facebook" />
            </li>
            <li>
              <img src={twitter} alt="twitter" />
            </li>
          </List>
          <p>
            A efood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade <br />
            dos produtos é toda do estabelecimento contratado.
          </p>
        </FooterDiv>
      </div>
    </Section>
  )
}

export default Footer
