// src/App.jsx
import React, { useState } from 'react';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import Overlay from './components/Overlay';
import './assets/css/formStyles.css';

function App() {
  const [rightPanelActive, setRightPanelActive] = useState(false);

  const handleSignUpClick = () => setRightPanelActive(true);
  const handleSignInClick = () => setRightPanelActive(false);

  return (
    <div className={`container ${rightPanelActive ? 'right-panel-active' : ''}`} id="container">
      <SignUpForm />
      <SignInForm />
      <Overlay onSignInClick={handleSignInClick} onSignUpClick={handleSignUpClick} />
    </div>
  );
}

export default App;
