import React from 'react';
import './App.css';
import APICall from './classFetchPlayers';
import useDarkMode from './hooks/Darkmode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

function App() {
  return (
    <div onClick={toggleMode} className={darkMode ? 'darkMode' : 'toggle'}>Dark Mode</div>
    <APICall />
  );
}

export default App;
