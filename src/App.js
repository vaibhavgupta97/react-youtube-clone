import React from 'react';
import Header from './Header'
import Sidebar from './Sidebar'
import RecomendedVideos from './RecomendedVideos'
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className="app">
     <Router><Header />
     <Switch>
     <Route path="/search">
     <h1>search</h1>
     </Route>
     <Route path="/">
     <div className="app_page">
     <Sidebar/>
     <RecomendedVideos/> </div>
     </Route></Switch></Router>
    </div>
  );
}

export default App;
