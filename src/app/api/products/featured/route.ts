import data from '../data.json'

export async function GET() {
  const featuredProducts = await data.products.filter(
    (product) => product.featured,
  )

  return Response.json(featuredProducts)
}
