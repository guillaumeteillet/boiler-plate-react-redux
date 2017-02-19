import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import css from './styles/general.css'

import Main from './pages/Main'
import Homepage from './pages/Homepage'
import Page1 from './pages/Page1'

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Homepage}></IndexRoute>
      <Route path="/page1" component={Page1}></Route>
      <Route path="/page1/:paramGet" component={Page1}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('root'))
