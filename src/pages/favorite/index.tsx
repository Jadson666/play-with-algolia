import { useAtom } from 'jotai'
import React, { useEffect, useRef } from 'react'
import { Layout } from '../../components/layouts/Layout'
import { ResultBoard } from '../../components/ResultBoard'
import { Loading } from '../../components/widgets/Loading'
import { NoFavorite } from '../../components/widgets/NoFavorite'
import { searchById } from '../../lib/apiClient'
import { dataTo, dataToZero, loadingToTrue } from '../../stores/events/favorite'
import { favoriteAtom } from '../../stores/favoriteStore'

const FavoritePage = () => {
  const callHappen = useRef(false)
  const [{ saved, isLoading, data }, setFavorite] = useAtom(favoriteAtom)

  const fetch = async () => {
    setFavorite(loadingToTrue)
    const { hits: result } = await searchById(saved)
    setFavorite(dataTo(result as any))
  }

  useEffect(() => {
    if (saved.size === 0) {
      setFavorite(dataToZero)
    } else if (!callHappen.current) {
      fetch()
      callHappen.current = true
    }
  }, [saved])

  return (
    <ResultBoard
      data={data}
      noResult={<NoFavorite />}
      loadingComponent={<Loading />}
      isLoading={isLoading}
    />
  )
}

export async function getStaticProps(context) {
  return {
    props: {},
  }
}

FavoritePage.layout = Layout

export default FavoritePage
