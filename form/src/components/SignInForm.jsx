// src/components/SignInForm.jsx
import React from 'react';
import SocialIcons from './SocialIcons';

const SignInForm = () => (
  <div className="form-container sign-in-container">
    <form action="#">
      <h1>Sign In</h1>
      <SocialIcons />
      <span>or use your account</span>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <a href="#">Forgot your password?</a>
      <button>Sign In</button>
    </form>
  </div>
);

export default SignInForm;
