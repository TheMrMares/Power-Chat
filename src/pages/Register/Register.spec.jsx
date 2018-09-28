import React from 'react'
import { shallow } from 'enzyme'
import { Register } from './Register'

const initPage = overrides => {
  const wrapper = shallow(
    <Register
      {...overrides}
    />
  )
  return { wrapper }
}

describe('Register', () => {
  it('should render as expected', () => {
    const { wrapper } = initPage()
    expect(wrapper).toMatchSnapshot()
  })
})
