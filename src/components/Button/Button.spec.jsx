import React from 'react'
import { shallow } from 'enzyme'
import { Button } from './Button'

const initPage = overrides => {
  const wrapper = shallow(
    <Button
      {...overrides}
    />
  )
  return { wrapper }
}

describe('Button', () => {
  it('should render as expected', () => {
    const { wrapper } = initPage()
    expect(wrapper).toMatchSnapshot()
  })
})
