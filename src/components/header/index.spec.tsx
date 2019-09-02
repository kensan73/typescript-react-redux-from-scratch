import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'

describe('<Header>', () => {
  it('should render no errors', () => {
    const component = shallow(<Header />)
    const wrapper = component.find('.headerId')
    expect(wrapper.length).toEqual(1)
  })
})

