import { createContext, useContext,useState } from "react";

const ThemeContext =createContext({
  theme : false,
  dispatch:()=>{},
})


const ThemeProvider = ({children})=>{
  const [isDark,setIsDark]=useState(false);
  const value = {theme : {isDark}, dispatch:setIsDark};

  // const toggleTheme=()=>{
  //   setIsDark(prev=>!prev)
  // }
  return (
    <ThemeContext.Provider value={value}>
      {/* <ThemeContext.Provider value={{isDark, toggleTheme}} */}
      {children}
    </ThemeContext.Provider>

  )
}
export {ThemeContext}
export default ThemeProvider;