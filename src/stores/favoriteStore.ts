import { atom } from 'jotai'

/**
 * I know it's weird I use Set here, but it just delicious since it has O(1) in deleting and adding (which is all the operations in this project)
 */
export interface FavoriteStore {
  saved: Set<string>
  data: {
    id: number
    title: string
    authorName: string
    categories: string
  }[]
  isLoading: boolean
}

const initialState = {
  saved: new Set<string>(),
  data: [],
  isLoading: false
}

export const favoriteAtom = atom<FavoriteStore>(initialState)
