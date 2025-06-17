export interface ImageProperties {
  title: string
  image: string
}

export type CardData = {
  cardTitle: string
  cardImage: string
  cardDescriptionShort: string
  cardDescription: string
  buttonRedirect: string
  buttonWebRedirect: string | null
}

export type SortDirection = 'asc' | 'desc'

export interface MenuItem {
  path: string
  label: string
}
