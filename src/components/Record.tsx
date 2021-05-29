import { useAtom } from 'jotai'
import React, { useCallback, useMemo, useState } from 'react'
import { favoriteAtom } from '../stores/favoriteStore'

export const Record = ({ data }) => {
  const [{ saved }, setFavorite] = useAtom(favoriteAtom)
  const [hover, setHover] = useState(false)
  const { id, title, author_name, categories } = data

  const handleSave = useCallback(
    (e) => setFavorite((state) => ({ ...state, saved: [...state.saved, id] })),
    [id]
  )
  const handleUnSave = useCallback(
    (e) =>
      setFavorite((state) => ({
        ...state,
        saved: state.saved.filter((v) => v !== id),
        data: state.data.filter((v) => v.id !== id)
      })),
    [id]
  )
  const handleHover = useCallback(() => setHover(true), [])
  const handleUnHover = useCallback(() => setHover(false), [])
  const isSaved = saved.find((v) => v === id)

  const button = useMemo(
    () => getButton(hover, isSaved, handleSave, handleUnSave),
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
