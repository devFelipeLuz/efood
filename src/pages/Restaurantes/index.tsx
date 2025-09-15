import { useParams } from 'react-router-dom'
import Header from '../../components/Restaurantes/Header'
import Hero from '../../components/Restaurantes/Hero'

import { useEffect, useState } from 'react'
import { Restaurante } from '../Home'
import Cardapio from '../../containers/CardapioList'

const Restaurantes = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://ebac-fake-api.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <Hero restaurante={restaurante} />
      <Cardapio restaurante={restaurante.cardapio} />
    </>
  )
}

export default Restaurantes
