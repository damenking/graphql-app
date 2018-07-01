import React from 'react';

// Routing via React Router
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';

// <Helmet> component for setting the page title/meta tags
import Helmet from 'react-helmet';

/* ReactQL */

// NotFound 404 handler for unknown routes, and the app-wide `history` object
// we can use to make route changes from anywhere
// import { Redirect } from 'kit/lib/routing';
// import history from 'kit/lib/routing';

/* App */

// Child React components. Note:  We can either export one main React component
// per file, or in the case of <Home>, <Page> and <WhenFound>, we can group
// multiple components per file where it makes sense to do so
import GraphQLMessage from 'components/graphql';
// import { Home, Page, WhenNotFound } from 'components/routes';
import Navbar from 'components/main/navbar';

export default () => (
  <div>
    <Helmet>
      <title>React CMS site</title>
      <meta name="description" content="React CMS site" />
    </Helmet>
    <Navbar />
  </div>
);
