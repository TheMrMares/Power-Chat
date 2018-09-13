import React from 'react'
import { shallow } from 'enzyme'

import { App } from './App'

const initPage = overrides => {

  const wrapper = shallow(<App
    {...overrides}
  />)
  return { wrapper }
}

describe('App Component', () => {
    describe('rendering', () => {
      it('should render as expected', () => {
        const { wrapper } = initPage()
        expect(wrapper).toMatchSnapshot()
      })
    })
  })