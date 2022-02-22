import React, { Component } from 'react'
import { Query } from '@apollo/client/react/components'
import { gql } from 'graphql-tag';
import Navbar from './Components/Navbar'
import Navbar2 from './Components/Navbar2';

const scandiWebQuery = gql`
  query {
    categories {
      name
      products {
        name
        inStock
        description
        gallery
      }
    }
  }`

export default class App extends Component {
  render() {
    return (
      <div>
        <Query query={scandiWebQuery}>
          {
            ({loading, error, data}) => {
              if (loading) return <p>"Loading..."</p>
              if (error) return <p>'Error... ${error.message}'</p>

              return(
                    <Navbar2 data={data}/>
                    // <Navbar data={data}/>
                    // console.log(data)
                )
            }
          }
        </Query>
        
      </div>
    )
  }
}