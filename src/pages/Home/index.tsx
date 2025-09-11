import Banner from '../../components/Home/Banner'
import CardSection from '../../containers/HomeCardSection'
import Prato from '../../models/Prato'
import Sushi from '../../assets/images/sushi.png'
import Macarrao from '../../assets/images/macarrao.png'

const cardapio: Prato[] = [
  {
    id: 1,
    image: Sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    score: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 2,
    image: Macarrao,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    score: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 3,
    image: Macarrao,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    score: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 4,
    image: Macarrao,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    score: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 5,
    image: Macarrao,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    score: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 6,
    image: Macarrao,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    score: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const Home = () => {
  return (
    <>
      <Banner />
      <CardSection pratos={cardapio} />
    </>
  )
}

export default Home
