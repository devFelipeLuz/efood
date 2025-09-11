import { ReactNode } from 'react'
import { ButtonTag } from '../../styles'

type Props = {
  children: ReactNode
}

const Tag = ({ children }: Props) => {
  return <ButtonTag>{children}</ButtonTag>
}

export default Tag
