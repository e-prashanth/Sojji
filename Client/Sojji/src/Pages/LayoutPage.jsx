import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Leftbar from './Components/Leftbar';
import Rightbar from './Components/Rightbar';
function LayoutPage() {
  return (
    <>
    <Navbar/>
    <div style={{display:"flex"}}>
        <Leftbar/>
        <Outlet/>
        <Rightbar/>
    </div>
    </>
  )
}

export default LayoutPage;