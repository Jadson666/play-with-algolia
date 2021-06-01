import React from 'react'
import SearchPage from '../src/pages/search'
import { mount } from 'enzyme'
import { delay } from '../src/utils'
import { act } from 'react-dom/test-utils';

jest.setTimeout(10000);

it('test search page is unchanged', async () => {
  const wrapper = mount(<SearchPage />)
  expect(wrapper.find('.record')).toHaveLength(0)
  const input = wrapper.find('.searchInput')
  await act(async () => {
    input.simulate('change', { target: { value: 'React' } })
    await delay(4500)
  })
  wrapper.update()
  expect(wrapper.find('.record').length > 0).toBeTruthy()
})
