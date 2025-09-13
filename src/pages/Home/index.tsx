import { useEffect, useState } from 'react'
import Banner from '../../components/Home/Banner'
import CardSection from '../../containers/HomeCardSection'

export type ItemCardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ItemCardapio[]
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  if (!restaurantes) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Banner />
      <CardSection restaurantes={restaurantes} />
    </>
  )
}

export default Home
