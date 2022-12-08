import { Theme } from "../context/themeContext"

export const changeCSSVariables = (theme: Theme) => {
  const root = document.querySelector(":root") as HTMLElement
  const components = [
    "body-background",
    "components-background",
    "card-background",
    "card-shadow",
    "text-color",
  ]
  components.forEach((str) => {
    root.style.setProperty(`--${str}-default`, `var(--${str}-${theme})`)
  })
}
