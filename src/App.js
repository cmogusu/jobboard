import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
} from 'react-router-dom';
import PersonalInformation from './views/PersonalInformation.js';


function App() {
  return (
    <Router>
      <div style={{maxWidth: '90vw', margin: '0 auto'}}>
        <ul className="nav">
          <li>
            <Link to="/">Map</Link>
          </li>
          <li>
            <NavLink to="/personal-information">Personal Information</NavLink>
          </li>
          <li>
            <NavLink to="/distance-matrix">Distance Matrix</NavLink>
          </li>
          <li>
            <NavLink to="/directions">Directions</NavLink>
          </li>
          <li>
            <NavLink to="/places">Places</NavLink>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={PersonalInformation} />
        <Route path="/personal-information" component={PersonalInformation} />
        <Route path="/distance-matrix" component={PersonalInformation} />
        <Route path="/directions" component={PersonalInformation} />
        <Route path="/places" component={PersonalInformation} />
      </div>
    </Router>
  );
}

export default App;

