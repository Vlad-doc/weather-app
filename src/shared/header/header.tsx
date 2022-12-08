import React, { useEffect } from "react"
import s from "./header.module.scss"
import { GlobalSvgSelector } from "../../assets/icons/global/globalSvgSelector"
import Select from "react-select"
import { useTheme } from "../../hooks/useTheme"

type Props = {}

export const Header = (props: Props) => {
  const theme = useTheme()
  const changeTheme = () =>
    theme.changeTheme(theme.theme === "light" ? "dark" : "light")
  useEffect(() => {
    const root = document.querySelector(":root") as HTMLElement
    const components = [
      "body-background",
      "components-background",
      "card-background",
      "card-shadow",
      "text-color",
    ]
    components.forEach((str) => {
      root.style.setProperty(`--${str}-default`, `var(--${str}-${theme.theme})`)
    })
  }, [theme.theme])

  const options = [
    { value: "spb", label: "St. Petersburg" },
    { value: "msc", label: "Moscow" },
    { value: "nn", label: "Nizhny Novgorod" },
  ]
  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === "dark" ? "#4f4f4f" : "rgba(71, 147, 255, 0.2)",
      width: "192px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: "100",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === "dark" ? "#fff" : "#000000",
    }),
  }
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          defaultValue={options.find((item) => item.value === "nn")}
          styles={colorStyles}
          options={options}
        />
      </div>
    </header>
  )
}
