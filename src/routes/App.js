import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login'
import Register from '../containers/Register'
import NotFound from '../containers/NotFound'
import Player from '../containers/Player'
import Layout from '../components/Layout'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Register' component={Register} />
        <Route exact path='/Player/:id' component={Player} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App;
