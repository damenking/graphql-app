import React from 'react';
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import Home from 'components/main/home';
import About from 'components/main/about';
import Contact from 'components/main/contact';

// Should decouple routing logic to components/routes
export default function Navbar() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}
