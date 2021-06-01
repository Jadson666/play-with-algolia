import React from 'react'
import renderer from 'react-test-renderer'
import SearchPage from '../src/pages/search'
import FavoritePage from '../src/pages/favorite'

it('test search page is unchanged', () => {
  const tree = renderer.create(<SearchPage />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('test favorite search page is unchanged', () => {
  const tree = renderer.create(<FavoritePage />).toJSON()
  expect(tree).toMatchSnapshot()
})
