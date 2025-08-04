import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Webpages/Home.jsx'
import About from '../Webpages/About'
import Contact from '../Webpages/Contact'
import Contribute from '../Webpages/Contribute'
import Event from '../Webpages/Event'
import Member from '../Webpages/Member'
import Gallery from '../Webpages/Gallery.jsx'

const Allroutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/contribute' element={<Contribute />}></Route>
                <Route path='/event' element={<Event/>}></Route>
                <Route path='/Gallery' element={<Gallery />}></Route>
                <Route path='/member' element={<Member />}></Route>
            </Routes>
        </div>
    )
}

export default Allroutes
