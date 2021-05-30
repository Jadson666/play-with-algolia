import React from 'react'
import { NavigatorView } from '../src/components/Navigator'
import { getButtonStyle } from '../src/utils'
import { shallow } from 'enzyme';

describe('Navigator testing', () => {
  it('render shallow dom correctly', () => {
    const wrapper = shallow(<NavigatorView searchClass="active" favoriteClass="nonActive" />)
    expect(wrapper.find('.active')).toHaveLength(1)
    expect(wrapper.find('.nonActive')).toHaveLength(1)
  })
  it('return the correct style', () => {
    const styles = getButtonStyle('/search')
    expect(styles.favoriteClass).toBe('nonActive')
    expect(styles.searchClass).toBe('active')
  })
})
