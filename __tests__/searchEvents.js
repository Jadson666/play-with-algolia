import { dataTo, loadingToTrue } from '../src/stores/events/search'
import { initialState } from '../src/stores/searchStore'

const mockStore = {
  data: [{
    id: 1,
    title: 'test',
    authorName: 'author'
  }],
  isLoading: false
}

describe('search events testing', () => {
  it('test loadingToTrue event', () => {
    expect(initialState.isLoading).toBe(false)
    const store = loadingToTrue(initialState)
    expect(store.isLoading).toBe(true)
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
})
