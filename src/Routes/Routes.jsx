import React from 'react';
import { BrowserRouter, Route,Routes as RouterRoutes } from 'react-router-dom'
import About from '../components/screens/home/about us/about';
import Home from '../components/screens/home/Home';
import Profile from '../components/screens/profile/profile';


function Routes(){
    return(
    <BrowserRouter>
    <RouterRoutes>
      <Route path='/' element={ <Home />}/>
      <Route path='/profile' element={ <Profile />}/>
      <Route path='/about' element={ <About/>}/>
    </RouterRoutes>
    </BrowserRouter>

    )
}

export default Routes