import { mount } from 'enzyme'
import React from 'react'
import { ResultBoard } from '../src/components/ResultBoard'
import { Loading } from '../src/components/widgets/Loading'
import { NoFavorite } from '../src/components/widgets/NoFavorite'

const data = [
  {
    id: 1,
    title: 'you',
    authorName: 'me',
    categories: ['1', '2', '3']
  },
  {
    id: 2,
    title: 'you',
    authorName: 'me',
    categories: ['1', '2', '3']
  }
]

describe('Favorite page render testing', () => {
  it('render welcome msg in empty favorite list correctly', () => {
    const wrapper = mount(
      <ResultBoard
        noResult={<NoFavorite />}
        loadingComponent={<Loading />}
        isLoading={false}
        data={[]}
      />
    )
    expect(wrapper.find('.important').text()).toBe(
      'Try to add your Favorite :)'
    )
  })

  it('render correct amount of records', () => {
    const wrapper = mount(
      <ResultBoard
        noResult={<NoFavorite />}
        loadingComponent={<Loading />}
        isLoading={false}
        data={data}
      />
    )
    expect(wrapper.find('.record')).toHaveLength(2)
  })
})
