import React from "react"
import s from "./header.module.scss"
import { GlobalSvgSelector } from "../../assets/icons/global/globalSvgSelector"
import Select from "react-select"

type Props = {}

export const Header = (props: Props) => {
  const options = [
    { value: "spb", label: "St. Petersburg" },
    { value: "msc", label: "Moscow" },
    { value: "nn", label: "Nizhny Novgorod" },
  ]
  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "rgba(71, 147, 255, 0.2)",
      width: "192px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: "100",
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
        <div className={s.change_theme}>
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
