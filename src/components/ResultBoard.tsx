import React from 'react'
import { Record } from './Record'

export const ResultBoard = ({ noResult, loadingComponent, isLoading, data, ...props }) => {
  const records = data.length > 0 ? data.map((v) => <Record key={v.id} data={v} />) : noResult
  return (
    <div {...props}>
      {!isLoading && records}
      {isLoading && loadingComponent}
    </div>
  )
}
