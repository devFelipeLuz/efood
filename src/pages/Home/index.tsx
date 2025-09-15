import Banner from '../../components/Home/Banner'
import RestaurantesList from '../../containers/RestaurantesList'
import { useGetRestaurantQuery } from '../../services/api'

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
  const { data: restaurantes } = useGetRestaurantQuery()

  if (!restaurantes) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Banner />
      <RestaurantesList restaurantes={restaurantes} />
    </>
  )
}

export default Home
