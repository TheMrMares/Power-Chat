import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app/App'
import registerServiceWorker from './registerServiceWorker'
import document from './utils/document'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
