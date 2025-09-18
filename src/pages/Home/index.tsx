import Banner from '../../components/Home/Banner'
import RestaurantesList from '../../containers/RestaurantesList'
import { useGetRestaurantQuery } from '../../services/api'

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
