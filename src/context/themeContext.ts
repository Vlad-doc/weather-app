import { createContext } from "react"

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}
interface Props {
  theme: Theme
  changeTheme: (theme: Theme) => void
}

const ThemeContext = createContext<Props>({
  theme: Theme.LIGHT,
  changeTheme: () => {},
})

export default ThemeContext
