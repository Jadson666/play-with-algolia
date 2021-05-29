import { useAtom } from 'jotai'
import React from 'react'
import { DebouncedInput } from '../../components/Input'
import { Layout } from '../../components/layouts/Layout'
import { SearchResults } from '../../components/SearchResults'
import { searchAtom } from '../../stores/searchStore'
import { apiClient } from '../apiClient'

const Search = () => {
  const [, setSearch] = useAtom(searchAtom)

  const sendRequest = async ({ target: { value: keyword } }) => {
    if (keyword === '') return
    setSearch((state) => ({ ...state, isLoading: true }))
    const { hits: result } = await apiClient.search(keyword)
    setSearch((state) => {
      return { ...state, isLoading: false, data: result as any }
    })
  }

  return (
    <div style={{ padding: '0 30px' }}>
      <div className='inputContainer'>
        <DebouncedInput onChange={sendRequest} time={800} />
      </div>
      <SearchResults
        loading={<div className='loading'>Loading...</div>}
        noResult={<div className='loading'>No Result</div>}
      />
    </div>
  )
}

Search.layout = Layout

export default Search
