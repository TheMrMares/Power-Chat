import React from 'react'
import { shallow } from 'enzyme'
import { Login } from './Login'

const initPage = overrides => {
  const wrapper = shallow(
    <Login
      {...overrides}
    />
  )
  return { wrapper }
}

describe('Login', () => {
  it('should render as expected', () => {
    const { wrapper } = initPage()
    expect(wrapper).toMatchSnapshot()
  })
})
