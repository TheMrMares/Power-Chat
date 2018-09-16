import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'
import window from './utils/window'

Enzyme.configure({ adapter: new Adapter() })

// eslint-disable-next-line
console.error = message => {
  throw new Error(message)
}

// eslint-disable-next-line
window.matchMedia = window.matchMedia || (() => {
  return {
    addListener: () => {},
    matches: false,
    removeListener: () => {},
  }
})
