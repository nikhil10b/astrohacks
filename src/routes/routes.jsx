import React from 'react'
import {Route,Routes} from 'react-router-dom';
import CelestialBodies from '../pages/CelestialBodies';
import MainBodies from '../pages/MainBodies';
import PhysicalCharacteristics from '../pages/PhysicalCharacteristics';
import Picture from '../pages/Picture';
import Home from '../pages/Home';
import Images from '../pages/Images';
import SatelliteInfo from '../pages/SatelliteInfo';
function routes() {
    return (
       
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/images' element={<Images/>} />
        <Route path='/Satellite' element={<SatelliteInfo/>} />
        <Route path='/PhysicalCharacteristics' element={<PhysicalCharacteristics/>} />
        <Route path='/CelestialBodies' element={<CelestialBodies/>} />
        <Route path='/MainBodies' element={<MainBodies/>} />
        <Route path='/Picture' element={<Picture/>} />
        </Routes>

  )
}

export default routes;
