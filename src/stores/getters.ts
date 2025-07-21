import type { CardData } from '../types/interfaces'

export const getData = async (): Promise<CardData[]> => {
  try {
    const response: Response = await fetch(
      'https://raw.githubusercontent.com/zuzanavolfova/data/refs/heads/main/coding-data.json',
      { method: 'GET' },
    )

    if (!response.ok) {
      throw new Error(`Data could not be loaded: ${response.status}`)
    }

    const data: CardData[] = await response.json()
    return data
  } catch (error: unknown) {
    console.error('Error loading json:', error)
    throw error
  }
}
