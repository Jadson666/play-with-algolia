import { useAtom } from 'jotai'
import React from 'react'
import { DebouncedInput } from '../../components/DebouncedInput'
import { Layout } from '../../components/layouts/Layout'
import { ResultBoard } from '../../components/ResultBoard'
import { Loading } from '../../components/widgets/Loading'
import { NoResult } from '../../components/widgets/NoResult'
import { dataTo, loadingToTrue } from '../../stores/events/search'
import { searchAtom } from '../../stores/searchStore'
import { apiClient } from '../../lib/apiClient'

const SearchPage = () => {
  const [, setSearch] = useAtom(searchAtom)
  const [{ isLoading, data }] = useAtom(searchAtom)

  const sendRequest = async ({ target: { value: keyword } }) => {
    if (keyword === '') return
    setSearch(loadingToTrue)
    const { hits: result } = await apiClient.search(keyword)
    setSearch(dataTo(result as any))
  }

  return (
    <div style={{ padding: '0 30px' }}>
      <div className='inputContainer'>
        <DebouncedInput onChange={sendRequest} time={800} />
      </div>
      <ResultBoard
        data={data}
        noResult={<NoResult />}
        loadingComponent={<Loading />}
        isLoading={isLoading}
      />
    </div>
  )
}

SearchPage.layout = Layout

export default SearchPage
