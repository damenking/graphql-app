// Now, let's create a GraphQL-enabled component...

// ... then, let's create the component and decorate it with the `graphql`
// HOC that will automatically populate `this.props` with the query data
// once the GraphQL API request has been completed

// ----------------------
// IMPORTS

/* NPM */

import React from 'react';
import PropTypes from 'prop-types';

// GraphQL
import { graphql } from 'react-apollo';

/* App */

// GraphQL queries.  Looking at this file demonstrates how to import fragments.
// Webpack will compile this into inline GraphQL for us, so we can pass the
// query to components using the @graphql decorator
import allMessages from 'src/graphql/queries/all_messages.gql';

@graphql(allMessages)
export default class GraphQLMessage extends React.PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      message: PropTypes.shape({
        text: PropTypes.string,
      }),
    }),
  }

  static defaultProps = {
    data: {
      message: {
        text: null,
      },
    },
  }

  renderEach() {
    const { data } = this.props;
    return (
      data.allMessages.map(each => {
        console.log(each);
        const message = each.text;
        console.log(message);
        const isLoading = each.loading ? 'yes' : 'nope';
        return (
          <div>
            <h2>!!!!!Message from GraphQL server: <em>{message}</em></h2>
            <h2>!!!!!!Currently loading?: {isLoading}</h2>
          </div>
        );
      })
    );
  }
  render() {
    const { data } = this.props;
    const isLoading = data.loading ? true : false;
    if (isLoading) {
      return (
        <div>
          <h2>Loading data...</h2>
        </div>
      );
    }
    return this.renderEach();
  }
}
