import Link from 'next/link'
import React, { CSSProperties } from 'react'
import { useRouter } from 'next/router'

export const Navigator = () => {
  const route = useRouter()

  const { searchClass, favoriteClass } = getButtonStyle(route)
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

const getButtonStyle = (route) => {
  const urls = route.pathname.split('/')
  switch (urls[1]) {
    case 'search':
      return { searchClass: 'active', favoriteClass: 'nonActive' }
    case 'favorite':
      return { favoriteClass: 'active', searchClass: 'nonActive' }
    default:
      return {}
  }
}
