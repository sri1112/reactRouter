import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './About'
import Dashboard from './Dashboard'
import Home from './Home'
import Pagenotfound from './Pagenotfound'
const App = () => {
  return (
 /*   <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>*/
    //path params
 /*   <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/dashboard/:name' element={<Dashboard />} />
          <Route path='/about/:name' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>*/
    //quary params
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/dashboard/' element={<Dashboard />} />
        <Route path='/about/' element={<About />} />
        {/* page not Found */}
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App