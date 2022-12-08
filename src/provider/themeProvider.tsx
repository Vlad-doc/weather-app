import React, { useState } from "react"
import ThemeContext, { Theme } from "../context/themeContext"
import { changeCSSVariables } from "../model/changeCSSVariables"
import { storage } from "../model/storage"

interface Props {
  children: React.ReactNode
}

const ThemeProvider = ({ children, ...props }: Props) => {
  const [theme, setTheme] = useState<Theme>(
    storage.getItem("theme") || Theme.LIGHT,
  )
  changeCSSVariables(theme)
  const changeTheme = (theme: Theme) => {
    storage.setItem("theme", theme)
    setTheme(theme)
    changeCSSVariables(theme)
  }
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
