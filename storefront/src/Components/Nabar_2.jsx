import React from "react";
import { useQuery, graphql, gql } from '@apollo/client'

const GET_NAME = gql`
  query {
   categories {
    name
   }
  }
`

class Nabar extends React.Component{
   data  = useQuery(GET_NAME);

   if (loading) {
    <h2>Loading...</h2>
  }

  if (error) {
    <h2>ERROR...</h2>
  }

  if (data) {
    console.log(data)
  }

	// constructor(){
	// 	this.state={
	// 		count :0
	// 	};
	// 	this.increase=this.increase.bind(this);
	// }
	
// increase(){
// 	this.setState({count : this.state.count +1});
// }

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

