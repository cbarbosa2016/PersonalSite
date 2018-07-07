import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/homePage.js';
import SchoolPage from './pages/schoolPage.js';
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Route 
            exact path="/" 
            component={HomePage} 
            render={() => (<HomePage/>) }
          />
          <Route 
            exact path="/RPI" 
            component={SchoolPage}
            render={() => (<SchoolPage/>)}
          />
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;