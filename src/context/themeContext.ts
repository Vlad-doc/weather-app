import { createContext } from "react"

interface Props {
  theme: string
  changeTheme: (theme: string) => void
}

const ThemeContext = createContext<Props>({
  theme: "",
  changeTheme: () => {},
})

export default ThemeContext
