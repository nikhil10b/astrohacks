import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Images from '../pages/Images';
import SatelliteInfo from '../pages/SatelliteInfo';
function routes() {
    return (
       
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/images' element={<Images/>} />
        <Route path='/Satellite' element={<SatelliteInfo/>} />
        </Routes>

  )
}

export default routes;
