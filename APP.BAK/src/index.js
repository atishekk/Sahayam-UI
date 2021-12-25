import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';

import { setContext } from 'apollo-link-context';

const uri = process.env.API_URI || 'http://localhost:4000/api';

const httpLink = createHttpLink({ uri });
const cache = new InMemoryCache();

const authLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: (await localStorage.getItem('AUTH_TOKEN')) || ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {},
  connectToDevTools: true
});

//const data = {
//  loggedIn: !!localStorage.getItem('token')
//}
//
//cache.modify({data});
//
//client.resetStore(() => cache.modify({data}));

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
