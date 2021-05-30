import React from 'react'
import renderer from 'react-test-renderer'
import { NavigatorView } from '../src/components/Navigator'

it('renders homepage unchanged', () => {
  const tree = renderer.create(<NavigatorView />).toJSON()
  expect(tree).toMatchSnapshot()
})
