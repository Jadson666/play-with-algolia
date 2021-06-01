import { atom } from 'jotai'

export interface SearchStore {
  data: {
    id: number
    title: string
    authorName: string
    categories: string
  }[]
  isLoading: boolean
}

export const initialState = {
  data: [],
  isLoading: false
}

export const searchAtom = atom<SearchStore>(initialState)
