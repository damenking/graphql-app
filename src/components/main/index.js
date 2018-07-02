import React from 'react';

// <Helmet> component for setting the page title/meta tags
import Helmet from 'react-helmet';

import { Route, Switch } from 'react-router-dom';

import Home from 'components/main/home/home';
import About from 'components/main/about/about';
import Contact from 'components/main/contact/contact';


/* ReactQL */

// NotFound 404 handler for unknown routes, and the app-wide `history` object
// we can use to make route changes from anywhere
// import { Redirect } from 'kit/lib/routing';
// import history from 'kit/lib/routing';


// import { Home, Page, WhenNotFound } from 'components/routes';
import Navbar from 'components/main/site/navbar';

export default () => (
  <div>
    <Helmet>
      <title>React CMS site</title>
      <meta name="description" content="React CMS site" />
    </Helmet>
    {/* <Navbar /> */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </div>
);
