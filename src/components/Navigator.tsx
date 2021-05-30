import Link from 'next/link'
import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
import { getButtonStyle } from '../utils'

export const Navigator = () => {
  const route = useRouter()
  const { searchClass, favoriteClass } = useMemo(() => getButtonStyle(route.pathname), [route.pathname])
  return (
    <NavigatorView searchClass={searchClass} favoriteClass={favoriteClass} />
  )
}

export const NavigatorView = ({ searchClass, favoriteClass }) => {
  return (
    <div className='NavBar'>
      <div style={{ cursor: 'pointer' }}>
        <Link href='/search'>
          <div className={searchClass}>Search</div>
        </Link>
        <Link href='/favorite'>
          <div className={favoriteClass}>Favorite</div>
        </Link>
      </div>
    </div>
  )
}

