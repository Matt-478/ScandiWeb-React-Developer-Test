import React from 'react';
import { render } from 'react-dom';
import App from './App'
import './index.css';
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

// SEE in console
  // client.query({
  //   query: gql`
  //     query {
  //       categories {
  //         name,
  //         products {
  //           name
  //           id
  //         }
  //       }
  //      }
  //     `
  // })
  // .then(result => console.log(result));

// export function GetStoreInfoNav() {
//   const { loading, error, data } = useQuery(STOREFRONT_INFO_NAV);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   return data.categories.map(({name, products}) => (
//     <div>
//       <h3>{name}</h3>
//       {products.map(({name, id}) => <p key={id}>{name}</p>)}
//     </div>
//     ))}
  
  render(
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>,
    document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
