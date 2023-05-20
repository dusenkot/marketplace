import React from 'react';
import { BrowserRouter, Route,Routes as RouterRoutes } from 'react-router-dom'
import About from '../components/screens/home/about us/about';
import Home from '../components/screens/home/Home';
import SignIn from '../components/screens/login/sign_in';
import Profile from '../components/screens/profile/profile';
import SingUp from '../components/screens/register/sign_up';


function Routes(){
    return(
    <BrowserRouter>
    <RouterRoutes>
      <Route path='/' element={ <Home />}/>
      <Route path='/profile' element={ <Profile />}/>
      <Route path='/about' element={ <About/>}/>
      <Route path='/sign_up' element={ <SingUp/>}/>
      <Route path='/sign_in' element={ <SignIn/>}/>
    </RouterRoutes>
    </BrowserRouter>

    )
}

export default Routes