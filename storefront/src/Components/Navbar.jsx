import React, {useState} from 'react'
import { useQuery, graphql, gql } from '@apollo/client'

const GET_NAME = gql`
  query {
   categories {
    name
   }
  }
`

function Navbar() {
  const { loading, error, data } = useQuery(GET_NAME);

  if (loading) {
    <h2>Loading...</h2>
  }

  if (error) {
    <h2>ERROR...</h2>
  }

  if (data) {
    console.log(data)
  }

  return (
    <div className="navbar-general">
      <div className="navbar-categories">
        {data && data.categories.map(({name}) => {
          return <p>{name}</p>
        })}
      </div>
    </div>
  )
}

export default Navbar
