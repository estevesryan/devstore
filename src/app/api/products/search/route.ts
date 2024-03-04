import data from '../data.json'
import { z } from 'zod'

import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl

  const query = z.string().parse(searchParams.get('q'))

  const products = data.products.filter((product) => {
    return product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  })

  if (!products) {
    return Response.json({ message: 'Product not found' }, { status: 400 })
  }

  return Response.json(products)
}
