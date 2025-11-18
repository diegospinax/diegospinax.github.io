import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { Layout } from "./components/Layout";

function App() {
  const [isDarkMode, setDarkMode] = useState<boolean>(true);

  const toggleTheme = () => setDarkMode(!isDarkMode);

  return (
    <ThemeContext value={{ isDarkMode, toggleTheme }}>
      <Layout />
    </ThemeContext>
  )
}

export default App
