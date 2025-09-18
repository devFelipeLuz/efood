import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Products = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Products[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

export type PurchaseRespose = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurant: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    purchase: builder.mutation<PurchaseRespose, PurchasePayload>({
      query: (body) => ({
        url: `checkout`,
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetRestaurantQuery, usePurchaseMutation } = api
export default api
