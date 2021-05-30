import { useAtom } from 'jotai'
import React, { useCallback, useMemo, useState } from 'react'
import { favoriteAddOne, favoriteDelete } from '../stores/events/favorite'
import { favoriteAtom } from '../stores/favoriteStore'

export const Record = ({ data }) => {
  const [{ saved }, setFavorite] = useAtom(favoriteAtom)
  const [hover, setHover] = useState(false)
  const { id, title, author_name, categories } = data

  const handleSave = useCallback((e) => setFavorite(favoriteAddOne(id)), [id])
  const removeFavorite = useCallback(
    (e) => setFavorite(favoriteDelete(id)),
    [id]
  )
  const handleHover = () => setHover(true)
  const handleUnHover = () => setHover(false)
  const isSaved = saved.has(id)

  const button = useMemo(
    () => getButton(hover, isSaved, handleSave, removeFavorite),
    [id, hover, isSaved]
  )
  return (
    <div
      className='record'
      onMouseEnter={handleHover}
      onMouseLeave={handleUnHover}
    >
      <p>{title}</p>
      <div>
        <span>{author_name}</span>
        {categories.map((v) => (
          <span className='tag' key={v}>
            {v}
          </span>
        ))}
      </div>
      {button}
    </div>
  )
}

const getButton = (hover, isSaved, handleSave, handleUnSave) => {
  if (isSaved && hover)
    return (
      <button className='unsave' onClick={handleUnSave}>
        UNSAVE
      </button>
    )
  if (isSaved)
    return (
      <button className='saved' disabled>
        SAVED
      </button>
    )
  if (!isSaved && hover)
    return (
      <button className='save' onClick={handleSave}>
        SAVE
      </button>
    )
  return null
}
