import styled from 'styled-components'
import { TemplateGridProps } from '.'

const Grid = styled.div<TemplateGridProps>`
  display: grid;
  grid-template-columns: ${({ columns }) =>
    columns === 3 ? '1fr 1fr 1fr' : '1fr 1fr'};
  column-gap: ${({ columnGap }) => (columnGap ? columnGap + 'px' : '')};
  row-gap: ${({ rowGap }) => (rowGap ? rowGap + 'px' : '')};
  gap: ${({ gap }) => (gap ? gap + 'px' : '')};
`

export default Grid
