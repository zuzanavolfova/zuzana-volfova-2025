export interface ImageProperties {
  title: string
  image: string
}

export interface CardDescriptionParams {
  value?: string
  [key: string]: unknown
}

export interface CardComponentProps {
  cardTitle?: string
  cardImage?: string
  cardDescriptionShort?: string
  cardDescription?: string
  cardDescriptionParams?: CardDescriptionParams
  buttonTitle?: string
  buttonRedirect: string
  buttonWebRedirect?: string
  fallbackUrl?: string
}

export interface CardData {
  cardTitle: string
  cardImage: string
  cardDescriptionShort: string
  cardDescription: string
  buttonRedirect: string
  buttonWebRedirect: string | null
}

export interface MenuItem {
  path: string
  label: string
}