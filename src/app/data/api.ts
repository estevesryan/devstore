import { env } from '@/app/env'

export async function api(path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const apiPrefix = '/api'
  const url = new URL(apiPrefix.concat(path), baseUrl)

  return await fetch(url, init)
}
