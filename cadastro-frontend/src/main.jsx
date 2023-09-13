import React from 'react'
import ReactDOM from 'react-dom/client'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar.jsx'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser'
import EditUser from './users/EditUser'
import ViewUser from './users/ViewUser'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/adduser' element={<AddUser />} />
        <Route exact path='/edituser/:id' element={<EditUser />} />
        <Route exact path='/viewuser/:id' element={<ViewUser />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
