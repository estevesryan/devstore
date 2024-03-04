import Link from 'next/link'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { api } from '@/app/data/api'
import { Product } from '@/app/data/types/product'

interface SearchProps {
  searchParams: {
    q: string
  }
}

async function searchProducts(query: string): Promise<Product[]> {
  const data = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 60,
    },
  })
  const products = await data.json()

  return products
}

export default async function Seach({ searchParams }: SearchProps) {
  const { q: query } = searchParams

  if (!query) {
    redirect('/')
  }

  const products = await searchProducts(query)
  return (
    <div className="flex flex-col gap-4">
      <p className="font-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
            >
              <Image
                className="group-hover:scale-105 transition-transform duration-500"
                src={product.image}
                width={480}
                height={480}
                quality={80}
                alt="Moletom"
              />

              <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
                <span className="text-sm truncate">{product.title}</span>
                <span className="flex h-full items-center rounded-full bg-violet-500 px-4 font-semibold">
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
