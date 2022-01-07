import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client"

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
})

client
  .query({
    query: gql`
      query {
       categories {
         products{
           id
          }
        }
      }
      `
  })
  .then(result => console.log(result));

//   const EXCHANGE_RATES = gql`
//   query GetExchangeRates {
//     rates(currency: "USD") {
//       currency
//       rate
//     }
//   }
// `;

  const STOREFRONT_INFO = gql `
  query {
    categories {
      name
      products {
        name
        inStock
        description
      }
    }
  }
  `

export function ExchangeRates() {
  const { loading, error, data } = useQuery(STOREFRONT_INFO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.categories.map(({name}) => (
      <p>{name}</p>
    )
  )
}
  
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('root'),
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
