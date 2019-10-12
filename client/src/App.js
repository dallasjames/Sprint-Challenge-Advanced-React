import React from 'react';
import './App.css';
import useDarkMode from './hooks/Darkmode';
import PlayerList from './classFetchPlayers';

const App = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <>
    <div onClick={toggleMode} className={darkMode ? 'darkMode' : 'toggle'}>Dark Mode</div>
    <PlayerList />
    </>
  );
}

export default App
