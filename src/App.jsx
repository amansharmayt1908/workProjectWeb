import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import FirstPage from './components/firstPage'
import SecondPage from './components/secondPage'
import ThirdPage from './components/thirdPage'
import FourthPage from './components/fourthPage'
import Footer from './components/footer'

function App() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Add event listener for beforeunload
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Cleanup listener
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className="app" style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column' 
    }}>
      <Header/>
      <FirstPage/>
      <ThirdPage/>
      <FourthPage/>
      
    </div>
  )
}

export default App
