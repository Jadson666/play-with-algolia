import algoliasearch from 'algoliasearch/lite'
import { getFilterString } from '../utils'

export const apiClient = algoliasearch(
  process.env.NEXT_PUBLIC_APP_ID,
  process.env.NEXT_PUBLIC_APP_KEY,
).initIndex(process.env.NEXT_PUBLIC_APP_INDEX)

export const searchById = async (ids) =>
  apiClient.search('', {
    filters: getFilterString(ids)
  })
