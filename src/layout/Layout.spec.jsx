import React from 'react'
import { shallow } from 'enzyme'
import { Layout } from './Layout'

const initPage = overrides => {
  const wrapper = shallow(
    <Layout
      {...overrides}
    />
  )
  return { wrapper }
}

describe('Layout', () => {
  it('should render as expected', () => {
    const { wrapper } = initPage()
    expect(wrapper).toMatchSnapshot()
  })
})
