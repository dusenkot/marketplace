import React from 'react';
import { BrowserRouter as Router, useNavigate, Outlet, Route } from 'react-router-dom';

const TextLink = () => {
  const navigateTo = useNavigate();

  const handleClick = () => {
    navigateTo('/scr/components/screens/profile/profile');
  };

  return (
    <div>
      <span onClick={handleClick}>Натисніть тут для переходу на іншу сторінку</span>
    </div>
  );
};


const App = () => {
  return (
    <Router>
      <div>
        <TextLink />
        <Outlet />
      </div>
    </Router>
  );
};

export default App;
