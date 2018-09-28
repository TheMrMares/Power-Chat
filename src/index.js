import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { init } from '@rematch/core'
import models from './models'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import document from './utils/document'

const store = init({
  models,
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
