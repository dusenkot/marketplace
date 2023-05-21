import React from 'react';
import { BrowserRouter, Route,Routes as RouterRoutes } from 'react-router-dom'
import About from '../components/screens/home/about us/about';
import Home from '../components/screens/home/Home';
import Profile from '../components/screens/profile/profile';
import Profile2 from '../components/screens/profile/profile2';
import SearchPeople from '../components/screens/Searcheople/serchpeope';
import PaymentWrapper from '../components/screens/Wallet/wallet';



function Routes(){
    return(
    <BrowserRouter>
    <RouterRoutes>
      <Route path='/' element={ <Home />}/>
      <Route path='/profile' element={ <Profile />}/>
      <Route path='/about' element={ <About/>}/>
      <Route path='/serchpeope' element={ <SearchPeople />}/>
      <Route path='/wallet' element={<PaymentWrapper />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/profile2' element={ <Profile2 />}/>
      <Route path='http://localhost/login-register/registration.php#'/>
    </RouterRoutes>
    </BrowserRouter>

    )
}

export default Routes