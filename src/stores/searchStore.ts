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

const initialState = {
  data: [],
  saved: [],
  isLoading: false
}

export const searchAtom = atom<SearchStore>(initialState)
