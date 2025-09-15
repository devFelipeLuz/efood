import { ReactNode } from 'react'
import Grid from './styles'

export interface TemplateGridProps {
  columns: number
  columnGap?: number
  rowGap?: number
  gap?: number
  children: ReactNode
}

const TemplateGrid = ({
  columns,
  columnGap,
  rowGap,
  gap,
  children
}: TemplateGridProps) => {
  return (
    <Grid columns={columns} columnGap={columnGap} rowGap={rowGap} gap={gap}>
      {children}
    </Grid>
  )
}

export default TemplateGrid
