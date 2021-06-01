import React from 'react'
import { DebouncedInput } from '../src/components/DebouncedInput'
import { mount } from 'enzyme';
import { delay } from '../src/utils'

describe('debouncedInput testing', () => {
  it('test debounced function work properly', async () => {
    let count = 0
    const onChange = () => count++
    const wrapper = mount(<DebouncedInput onChange={onChange} time={1000} />)
    wrapper.simulate('change')
    wrapper.simulate('change')
    expect(count).toBe(0)
    await delay(1050)
    expect(count).toBe(1)
    wrapper.simulate('change')
    await delay(500)
    expect(count).toBe(1)
    await delay(550)
    expect(count).toBe(2)
  })
})
