import { loadingToTrue, dataToZero, dataTo, favoriteAddOne, favoriteDelete } from '../src/stores/events/favorite'
import { initialState } from '../src/stores/favoriteStore'

const mockStore = {
  saved: new Set([123,456]),
  data: [{
    id: 1,
    title: 'test',
    authorName: 'author'
  }],
  isLoading: false
}

describe('favorite events testing', () => {
  it('test loadingToTrue event', () => {
    expect(initialState.isLoading).toBe(false)
    const store = loadingToTrue(initialState)
    expect(store.isLoading).toBe(true)
  })

  it('test dataToZero event', () => {
    const store = dataToZero(mockStore)
    expect(store.data).toHaveLength(0)
  })

  it('test dataTo event', () => {
    const store = dataTo(mockStore.data)(initialState)
    expect(store.data).toHaveLength(1)
    for (let i = 0; i< mockStore.data.length; i++) {
      for (const key in mockStore.data[i] ) {
        expect(store.data[i][key]).toBe(mockStore.data[i][key])
      }
    }
  })

  it('test favoriteAddOne event', () => {
    const id = 555
    expect(initialState.saved.has(id)).toBe(false)
    const store = favoriteAddOne(id)(initialState)
    expect(store.saved.has(id)).toBe(true)
  })

  it('test favoriteDelete event', () => {
    const id = 123
    expect(mockStore.saved.has(id)).toBe(true)
    const store = favoriteDelete(id)(initialState)
    expect(store.saved.has(id)).toBe(false)
  })
})
