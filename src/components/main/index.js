import React from 'react';

// <Helmet> component for setting the page title/meta tags
import Helmet from 'react-helmet';

/* ReactQL */

// NotFound 404 handler for unknown routes, and the app-wide `history` object
// we can use to make route changes from anywhere
// import { Redirect } from 'kit/lib/routing';
// import history from 'kit/lib/routing';


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
