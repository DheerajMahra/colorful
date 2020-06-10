import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../nav/Navbar'
import Feed from '../../containers/feed/Feed'
import Create from '../../containers/create/Create'
import Saved from '../../containers/saved/Saved'

const App = () => {

  return (
    <Router>
      <div className="App">
      
        <Navbar />
        <Switch>

          <Route exact path="/" component={Feed} />
          <Route path="/create" component={Create} />
          <Route path="/saved" component={Saved} />
      
        </Switch>
      </div>
    </Router>
  )
}

export default App;
