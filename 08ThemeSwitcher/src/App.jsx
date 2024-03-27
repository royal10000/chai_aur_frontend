import { useEffect, useState } from "react"
import { ThemeContextProvider } from "./context/theme"
import ThemeButton from "./components/ThemeButton"
import Card from "./components/Cards"



function App() {

  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark")
    document.querySelector("html").classList.add(themeMode)
  }, [themeMode])
  return (
    <ThemeContextProvider value={{ themeMode, lightTheme, darkTheme }}>
      <ThemeButton />
      <Card/>
    </ThemeContextProvider>
  )
}

export default App
