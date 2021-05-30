import { SearchStore } from '../searchStore'

export const loadingToTrue = (state: SearchStore) => ({ ...state, isLoading: true })

export const dataTo = (result: SearchStore['data']) => (state: SearchStore) => {
  return { ...state, isLoading: false, data: result }
}
