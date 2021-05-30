import { apiClient } from '../src/lib/apiClient'

describe('apiClient testing', () => {
  it('can successfully use apiClient to search', async () => {
    const { hits } = await apiClient.search('', { filters : 'id=1818'})
    expect(hits[0].id).toBe(1818)
  })
})
