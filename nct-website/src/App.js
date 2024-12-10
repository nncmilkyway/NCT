import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/pages/Home';

function App() {
  return (
    <>
      <Router> 
      <Navbar />
      <Switch> {/* Switch is used in React Router v5 */}
        <Route path="/" exact component={Home} /> {/* Use component prop */}
      </Switch>
    </Router>
    </>
  );
}

export default App;
