import { mount } from 'enzyme';
import { useAtom } from 'jotai';
import React, { useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import FavoritePage from '../src/pages/favorite';
import { favoriteAddOne } from '../src/stores/events/favorite';
import { favoriteAtom } from '../src/stores/favoriteStore';
import { delay } from '../src/utils'

const TestComponent = () => {
  const [, setFavorite] = useAtom(favoriteAtom)
  useEffect(() => setFavorite(favoriteAddOne(24273)), [])
  return <FavoritePage />
}

it('test favorite page is render well', async () => {
  let wrapper = null
  await act(async () => {
    wrapper = mount(<TestComponent />)
    await delay(1500)
  })
  wrapper.update()
  const record = wrapper.find('.record')
  expect(record).toHaveLength(1)
  record.simulate('mouseenter')
  wrapper.find('button').simulate('click')
  expect(wrapper.find('.record')).toHaveLength(0)  
})
