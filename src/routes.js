import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from  './views/Home';
import NotFound from  './views/NotFound';
import Categories from  './views/Categories';

import Header from "./components/Header"
import Footer from "./components/Footer"

export default function Navegation(props) {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/categories/:category" {...props} element={<Categories/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
