import { useAtom } from 'jotai'
import React, { useEffect, useRef } from 'react'
import { apiClient } from '../pages/apiClient'
import { favoriteAtom } from '../stores/favoriteStore'
import { Record } from './Record'

export const FavoriteResults = (props) => {
  const callHappen = useRef(false)
  const [{ saved, isLoading, data }, setFavorite] = useAtom(favoriteAtom)
  const records =
    data.length > 0 ? (
      data.map((v) => <Record key={v.id} data={v} />)
    ) : props.noResult

  const fetch = async () => {
    setFavorite((state) => ({ ...state, isLoading: true }))
    const { hits: result } = await apiClient.search('', {
      filters: getFilterString(saved)
    })
    setFavorite((state) => ({
      ...state,
      isLoading: false,
      data: result as any
    }))
  }

  useEffect(() => {
    if (saved.length === 0) {
      setFavorite((state) => ({
        ...state,
        data: []
      }))
    } else {
      if (!callHappen.current) {
        fetch()
        callHappen.current = true
      }
    }
  }, [saved])

  return (
    <div {...props}>
      {!isLoading && records}
      {isLoading && props.loading}
    </div>
  )
}

const getFilterString = (data) => {
  const temp = data.map(v => `id=${v}`)
  return temp.join(' OR ')
}
