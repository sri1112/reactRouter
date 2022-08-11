
import React from 'react'
import { Link } from 'react-router-dom'
import './index.css';
//using path params value
// import { useParams } from 'react-router-dom';

const Dashboard = () => {
    // let params = useParams()
  return (
    <div>
        <center>
            <h3>welcome to dashboard page</h3>
            <Link to='/' className='Link'>Back to Home</Link>
            {/* using params */}
            {/* <p> Name: {params.name}</p> */}
        </center>
    </div>
  )
}

export default Dashboard

/*
// import React from 'react'
// import { Link } from 'react-router-dom'
// import './index.css';
//using quary params value
import { useLocation } from 'react-router-Dom';


const Dashboard = () => {
    let {search} = useLocation();
    let params = new URLSearchParams(search);
    console.log(search);

  return (
    <div>
        <center>
            <h3>welcome to dashboard page</h3>
            <p> Name: {params.get('name')}</p>
            <p>Age: {params.get('age')}</p>
            <Link to='/' className='Link'>Back to Home</Link>
        </center>
    </div>
  )
}

export default Dashboard*/