import React from 'react';
import Controls from './Controls';
import UserList from './UserList';
import Footer from './Footer';
import './App.css';

var isLoggedIn = true;

function App() {
  var currentYear = new Date().getFullYear();
  var loginMessage = isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>;

  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>{currentYear}</p>
      {loginMessage}
      {RenderLoggedIn()}
    </div>
  );
}

function RenderLoggedIn() {
  if (isLoggedIn) {
    return (
      <div>
        <section>
          <Controls />
        </section>
        <section>
          <UserList />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
