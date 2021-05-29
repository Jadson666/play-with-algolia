import React from 'react'
import { FavoriteResults } from '../../components/FavoriteResult'
import { Layout } from '../../components/layouts/Layout'

const Favorite = () => {
  return (
    <div>
      <FavoriteResults
        noResult={<div className='loading'>Try to add your Favorite :)</div>}
        loading={<div className='loading'>Loading...</div>}
      />
    </div>
  )
}

Favorite.layout = Layout

export default Favorite
