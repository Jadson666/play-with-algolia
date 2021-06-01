export const getFilterString = (idSet: Set<string>): string => {
  const temp = [...idSet].map((v) => `id=${v}`)
  return temp.join(' OR ')
}

interface NavStyle {
  searchClass?: 'active' | 'nonActive'
  favoriteClass?: 'active' | 'nonActive'
}

export const getButtonStyle = (url: string): NavStyle => {
  const urls = url.split('/')
  switch (urls[1]) {
    case 'search':
      return { searchClass: 'active', favoriteClass: 'nonActive' }
    case 'favorite':
      return { favoriteClass: 'active', searchClass: 'nonActive' }
    default:
      return {}
  }
}

export const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms))
