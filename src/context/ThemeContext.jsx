import { createContext, useState } from "react";

// Crear el contexto
export const ThemeContext = createContext();

// Proveedor del contexto
const ComponentThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Estado para el tema

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
   <>
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
   </>
  );
};


export default ComponentThemeProvider;
