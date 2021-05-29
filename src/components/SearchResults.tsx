import { useAtom } from 'jotai'
import React from 'react'
import { searchAtom } from '../stores/searchStore'
import { Record } from './Record'

export const SearchResults = (props) => {
  const [{ isLoading, data }] = useAtom(searchAtom)
  const records =
    data.length > 0
      ? data.map((v) => <Record key={v.id} data={v} />)
      : props.noResult
  return (
    <div {...props}>
      {!isLoading && records}
      {isLoading && props.loading}
    </div>
  )
}
