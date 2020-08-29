// import 'overlayscrollbars/css/OverlayScrollbars.css';
import React from 'react';
// import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './component/navbar'
import Intro from './pages/home/intro';
import NotFoundPage from './component/NotFound';
import About from './pages/about/about';
import Projects from './pages/projects/projects'
// import Nav1 from './component/nav1/nav1'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div id='page-body'>
            <Switch>
              <Route path='/' component={Intro} exact/>
              <Route path='/about' component={About} exact/>
              <Route path='/projects' component={Projects} exact/>
              {/* <Route path='/contact' component={Contact} exact/> */}
              <Route component={NotFoundPage} />

            </Switch>
        </div>
      </div>
    </Router>
    // <Nav1/>
    
  );
}

export default App;
