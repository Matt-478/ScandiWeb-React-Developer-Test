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

      <div className="nav-logo-general">
        {/* shopping bag */}
        <div>
        <svg width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M30.0222 23.6646C30.0494 23.983 29.8009 24.2566 29.4846 24.2566H3.46924C3.15373 24.2566 2.90553 23.9843 2.93156 23.6665L4.7959 0.912269C4.8191 0.629618 5.05287 0.412109 5.33372 0.412109H27.5426C27.8226 0.412109 28.0561 0.628527 28.0801 0.910361L30.0222 23.6646Z" fill="#1DCF65"/>
           <path d="M32.0988 29.6014C32.1313 29.9985 31.8211 30.339 31.4268 30.339H1.59438C1.2009 30.339 0.890922 30.0002 0.922082 29.6037L3.06376 2.34718C3.09168 1.9927 3.38426 1.71973 3.73606 1.71973H29.1958C29.5468 1.71973 29.8391 1.99161 29.868 2.34499L32.0988 29.6014Z" fill="url(#paint0_linear_150_363)"/>
           <defs>
           <linearGradient id="paint0_linear_150_363" x1="25.8733" y1="26.3337" x2="7.51325" y2="4.9008" gradientUnits="userSpaceOnUse">
           <stop stop-color="#52D67A"/>
           <stop offset="1" stop-color="#5AEE87"/>
           </linearGradient>
           </defs>
        </svg>
        </div>

       {/* arrow */}
        <div className="nav-logo-arrow">
          <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.92324 12.6953C4.04024 12.6953 0.881348 8.86314 0.881348 4.15278C0.881348 3.90747 1.07815 3.7085 1.32109 3.7085C1.56403 3.7085 1.76084 3.90733 1.76084 4.15278C1.76084 8.3732 4.52531 11.8067 7.92337 11.8067C11.3214 11.8067 14.0859 8.3732 14.0859 4.15278C14.0859 3.90747 14.2827 3.7085 14.5257 3.7085C14.7686 3.7085 14.9654 3.90733 14.9654 4.15278C14.9653 8.86314 11.8062 12.6953 7.92324 12.6953Z" fill="white"/>
            <path d="M12.2581 4.03371C12.1456 4.03371 12.0331 3.99037 11.9471 3.90356C11.7754 3.73007 11.7754 3.44878 11.9471 3.2753L14.226 0.972924C14.3084 0.889655 14.4203 0.842773 14.5369 0.842773C14.6536 0.842773 14.7654 0.889519 14.8479 0.972924L17.1045 3.25295C17.2762 3.42643 17.2762 3.70772 17.1045 3.88121C16.9327 4.05456 16.6543 4.0547 16.4826 3.88121L14.5368 1.91546L12.569 3.90356C12.4831 3.99037 12.3706 4.03371 12.2581 4.03371Z" fill="white"/>
          </svg>
       </div>
       </div>

    </div>
  )
}

export default Navbar
