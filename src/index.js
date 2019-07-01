import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Redirect, Switch } from 'react-router-dom'
import history from './history'

import { Provider } from 'react-redux'
import store from './redux/store'

import { OrderGuideContainer, PlaceOrderContainer } from './pages'
import { NavBar } from './components'
import { BaseCSS } from 'styled-bootstrap-grid'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BaseCSS />
        <Router history={history}>
          <NavBar />
          <Switch>
            <Route path='/placeOrder' exact component={PlaceOrderContainer} />
            <Route path='/' exact component={OrderGuideContainer} />
            <Redirect to='/' />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))