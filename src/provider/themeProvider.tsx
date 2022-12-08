import React, { useState } from "react"
import ThemeContext from "../context/themeContext"

interface Props {
  children: React.ReactNode
}

const ThemeProvider = ({ children, ...props }: Props) => {
  const [theme, setTheme] = useState<string>("light")
  const changeTheme = (theme: string) => setTheme(theme)
  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
