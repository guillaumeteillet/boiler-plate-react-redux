import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import css from './styles/general.css'

import store, { history } from './store'
import App from './components/App'
import Homepage from './pages/Homepage'
import Page1 from './pages/Page1'
import Api from './containers/Api'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Homepage}></IndexRoute>
        <Route path="/page1" component={Page1}></Route>
        <Route path="/api" component={Api}></Route>
        <Route path="/page1/:paramGet" component={Page1}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))
