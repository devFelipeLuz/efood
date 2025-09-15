import { ReactNode } from 'react'
import Container from './styles'

interface SectionProps {
  children: ReactNode
}

const Section = ({ children }: SectionProps) => {
  return (
    <Container>
      <div className="container">{children}</div>
    </Container>
  )
}

export default Section
