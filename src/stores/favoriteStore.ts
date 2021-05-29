import { atom } from 'jotai'

export interface FavoriteStore {
  saved: string[]
  data: {
    id: number
    title: string
    authorName: string
    categories: string
  }[]
  isLoading: boolean
}

const initialState = {
  saved: [],
  data: [],
  isLoading: false
}

export const favoriteAtom = atom<FavoriteStore>(initialState)
