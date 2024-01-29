import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "bootstrap-icons/font/bootstrap-icons.css"
import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import Template from "./layout/Template"
import Sidebar from "./dashboard/Sidebar"
import Navbar from "./dashboard/Navbar"
import Stats from './components/Stats'
import Cards from './components/Cards'
import { useEffect, useState } from 'react';
import { getUserDetails } from './utils/GetUser';
function App() {

  const [user, setUser] = useState()

  useEffect(() => {
    const userDetails = getUserDetails();
    setUser(userDetails)
  } ,[])

  return (
    (user ?
      (
      <Template
        sidebar={<Sidebar />}
        navbar={<Navbar />}
      >
        <Routes>
          <Route path='/timeline/stats' element={<Stats />} />
          <Route path='/timeline/cards' element={<Cards />} />
        </Routes>
      </Template>
      )
      :
      <div className='d-flex flex-column justify-content-center mx-auto align-items-center'>
         <h1>La page tarde à s'afficher?</h1>
         <h2>Cliquez sur le bouton ci-dessous pour vous reconnecter</h2>
         <Link to='/' className='text-white'><button className='btn btn-primary rounded border' >
            Connection
         </button></Link> 
      </div>
    )
      
  );
}

export default App;
