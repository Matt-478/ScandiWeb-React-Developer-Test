import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { useEffect, useState } from 'react'

const GET_DOGS = gql`
  query {
   categories {
     name,
     products {
       name
       id
     }
   }
  }
`;

export function Navbar() {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <p>BS</p>
      {
        data && data.categories.map(() => {
          <p>yeah, babes</p>
          })
      }
      {console.log(data.categories)}
    </div>
  )
}

// export default Navbar




























// const Navbar = () => {

  //   useEffect(() => {
  //     GetStoreInfoForNav()
  //   }, [])
  
  //   const[navCategoryNames, setNavCategoryNames] = useState()
  
  //   const STOREFRONT_INFO_NAV = gql `
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
  
  //   function GetStoreInfoForNav() {
  //     const { loading, error, data } = useQuery(STOREFRONT_INFO_NAV);
  
  //     if (loading) return <p>Loading...</p>;
  //     if (error) return <p>Error :(</p>;
  //     setNavCategoryNames(data.categories) 
  //   }
  
  //   return (
  //     <>
  //       Just the Navbar... for now
  //       {console.log(navCategoryNames)}
  //     </>
  //   )
  // }