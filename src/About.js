import React from 'react'
import { Link } from 'react-router-dom'
import './index.css';
//use params
// import { useParams } from 'react-router-dom';

const About = () => {
    // let params2 = useParams()
  return (
    <div>
        <center>
            <h3> your in about page </h3>
            <Link to='/' className='Link'>Back to Home</Link>
            {/* using params */}
            {/* <p> Name: {params2.name}</p> */}
        </center>
    </div>
  )
}

export default About