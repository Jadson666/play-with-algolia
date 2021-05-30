import { FavoriteStore } from '../favoriteStore'

export const loadingToTrue = (state: FavoriteStore) => ({
  ...state,
  isLoading: true
})

export const dataTo =
  (result: FavoriteStore['data']) => (state: FavoriteStore) => ({
    ...state,
    isLoading: false,
    data: result
  })

export const dataToZero = (state: FavoriteStore) => ({
  ...state,
  data: []
})

export const favoriteAddOne = (id: number) => (state) => ({
  ...state,
  saved: new Set([...state.saved, id])
})

export const favoriteDelete = (id: number) => (state) => {
  const copySet = new Set(state.saved)
  copySet.delete(id)
  return {
    ...state,
    saved: copySet,
    data: state.data.filter((v) => v.id !== id)
  }
}
