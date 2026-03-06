import React from 'react';

function App() {
  var currentYear = new Date().getFullYear();
  var isLoggedIn = true;
  var loginMessage = isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>;

  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>{currentYear}</p>
      {loginMessage}
    </div>
  );
}

export default App;
