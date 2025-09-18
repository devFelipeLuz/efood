declare type ItemCardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

declare type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ItemCardapio[]
}

declare type DeliveryValues = {
  name: string
  address: string
  city: string
  cep: string
  number: string
  complement: string
}

declare type PaymentValues = {
  cardDisplayName: string
  cardNumber: string
  cardCode: string
  expiresMonth: string
  expiresYear: string
}
