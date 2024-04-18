import { useState, createContext } from 'react'
import './App.css'
import Button from './Button'
import Header from './Header'

const ThemeContext = createContext()

function App() {
  const [themeState, setThemeState] = useState('light')

  function toggleTheme() {
    setThemeState(prevThemeState => prevThemeState === 'light' ? 'dark' : 'light')
  }

  return (
   <ThemeContext.Provider value={{themeState, toggleTheme}}>
    <div className={`container ${themeState}-theme`}>
        <Header />
        <Button />
    </div>
   </ThemeContext.Provider>
  )
}

export default App
export { ThemeContext }
