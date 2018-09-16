import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import { init } from '@rematch/core'
import { App } from './App'
import models from '../models'

const store = init({
  models,
})

const initPage = overrides => {
  const wrapper = shallow(
  <Provider store={store}>
    <App
      classes={{}}
      {...overrides}
    />
  </Provider>
  )
  return { wrapper }
}

describe('App', () => {
  it('should render as expected', () => {
    const { wrapper } = initPage()
    expect(wrapper).toMatchSnapshot()
  })
})
