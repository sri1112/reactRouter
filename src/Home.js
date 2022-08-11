//snipets (rafce)(arrow function)
import React from 'react'
import { Link } from 'react-router-dom'
import './index.css';


const Home = () => {
    // const user = "srikar"
    // const user2 = "Aleti"
  return (
                             
   <div>
        <center>
            <h3>welcome to Home page</h3>
            <Link to='/dashboard' className='Link'>Dashboard</Link> {" "}
            <Link to='/about' className='Link'>About</Link>
        </center>
    </div>
    // it is a path params
    /*<div>
        <center>
            <h3>welcome to Home page</h3>
            <Link to={`/dashboard/${user}`} className='Link'> Dashboard </Link>
            <Link to={`/about/${user2}`} className='Link'>About</Link>
        </center>
    </div>*/
    //it is a quary params
 /*   <div>
        <center>
            <h3>welcome to Home page</h3>
            <Link to={`/dashboard?name=${user}&age='26'`} className='Link'> Dashboard </Link> {" "}
            <Link to={`/about?name=${user2}&age='27'`} className='Link'>About</Link>
        </center>
    </div>*/
  )
}

export default Home