// ----------------------
// IMPORTS

/* NPM */

// Apollo client library
import { createNetworkInterface, ApolloClient } from 'react-apollo';

/* ReactQL */

// Configuration
import config from 'kit/config';

// Get environment, to figure out where we're running the GraphQL server
import { getServerURL } from 'kit/lib/env';

// ----------------------

// Helper function to create a new Apollo client, by merging in
// passed options alongside any set by `config.setApolloClientOptions` and defaults
export function createClient(opt = {}) {
  return new ApolloClient(Object.assign({
    reduxRootSelector: state => state.apollo,
  }, config.apolloClientOptions, opt));
}

// Wrap `createNetworkInterface` to attach middleware
export function getNetworkInterface(uri, opt) {
  const networkInterface = createNetworkInterface({
    uri,
    opts: Object.assign({}, config.apolloNetworkOptions, opt),
  });

  // Attach middleware
  // Cannot get authorization middleware to work when pulling from
  // middleware declaration in config...
  networkInterface.use(
    [{
      applyMiddleware(req, next) {
        const authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiYzY5ODRjMjEtNzJhMC00YzI1LTgzODAtODg4NDkxYTQ5NGFlIn0.qyFES8pRUEKNSj26x2_BC3Av5b5NQnsg8WM92J2OFno';
        if (!req.options.headers) {
          req.options.headers = {}; // Create the header object if needed.
        }
        req.options.headers.authorization = `Bearer ${authToken}`;
        next();
      },
    }],
  );
  // networkInterface.use(config.apolloMiddleware.map(f => ({ applyMiddleware: f })));
  networkInterface.useAfter(config.apolloAfterware.map(f => ({ applyAfterware: f })));

  return networkInterface;
}

// Creates a new browser client
export function browserClient() {
  // If we have an internal GraphQL server, we need to append it with a
  // call to `getServerURL()` to add the correct host (in dev + production)
  const uri = config.graphQLServer
    ? `${getServerURL()}${config.graphQLEndpoint}` : config.graphQLEndpoint;

  return createClient({
    networkInterface: getNetworkInterface(uri),
  });
}
