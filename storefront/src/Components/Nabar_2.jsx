import React from "react";
import { useQuery, graphql, gql } from '@apollo/client'

const GET_NAME = gql`
  query {
   categories {
    name
    products {
      id
      inStock
    }
   }
  }
`

class Nabar extends React.Component{
  //  {loading, data}  = useQuery(GET_NAME);

  //   name = client.readQuery({
  //   query: GET_NAME,
  //   // variables: { // Provide any required variables here
  //   //   id: 5,
  //   // },
  // });

   if (loading) {
    <h2>Loading...</h2>
  }

  if (error) {
    <h2>ERROR...</h2>
  }

  if (data) {
    console.log(data)
  }

	render(){
		return (
			// <div style={{margin:'50px'}}>
			// <h1>Welcome to Geeks for Geeks </h1>
			// <h3>Counter App using Class Component : </h3>
			// <h2> {this.state.count}</h2>
			// <button onClick={this.increase}> Add</button>

			// </div>
      <div className="navbar-categories-general">
      {data && data.categories.map(({name}) => {
        return <span><p>{name}</p></span>
      })}
    </div>
		)
	}
}

export default Nabar;

