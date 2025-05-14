import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase-config';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ChatRoom from './components/ChatRoom';
import './App.css';

function App() {
  const [user] = useAuthState(auth);
  const [isRegistering, setIsRegistering] = useState(false);

  if (user) {
    return <ChatRoom />;
  }

  return (
    <div className="App">
      <header><h1>🔥 Chat App</h1></header>
      {isRegistering ? <SignUp /> : <SignIn />}
      <p style={{ cursor: 'pointer', color: 'blue' }} onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? 'Already have an account? Sign in' : 'Don’t have an account? Register'}
      </p>
    </div>
  );
}

export default App;
