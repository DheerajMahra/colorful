import React, { useState, useEffect } from 'react';
import './App.css';
import db from '../../config/firebase'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../../components/nav/Navbar'
import Feed from '../../components/feed/Feed'
import Create from '../create/Create'
import Saved from '../../components/saved/Saved'

const App = () => {

  const [palette, setPalette] = useState({})

  const fetchPalette = () => {

    db.collection('palettes').onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {

        if (change.type === "added" || change.type === "modified") {
            setPalette( prevPalette => ({ 
              ...prevPalette,
              [change.doc.id]: { 
                id: change.doc.id,
                ...change.doc.data()
              }
            }))
        }
      })
    })
  }

  useEffect(() => {
      fetchPalette()
  }, [])

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>

          <Route
            exact path="/"
            render={ props => 
              <Feed
                {...props}
                palette={palette}
              />
            }
          />
          <Route path="/create" component={Create} />
          <Route path="/saved" component={Saved} />
      
        </Switch>
      </div>
    </Router>
  )
}

export default App;
