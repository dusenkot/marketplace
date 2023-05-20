import React from 'react';
import { useNavigate  } from 'react-router-dom';

const FormSends = () => {
  const navigateTo = useNavigate();


  return (
    <div>
      <span onClick={() => navigateTo('/about')}>About</span>
      <span onClick={() => navigateTo('/profile')}>Profile</span>
      <span onClick={() => navigateTo('/sign_up')}>Register</span>
      <span onClick={() => navigateTo('/sign_in')}>Login</span>
    </div>
    
  );
};

export default FormSends
