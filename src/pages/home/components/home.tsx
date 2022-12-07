import React from "react"
import s from "./home.module.scss"
import ThisDay from "./thisDay/thisDay"
import ThisDayInfo from "./thisDayInfo/thisDayInfo"

type Props = {}

export const Home = (props: Props) => {
  return (
    <div className={s.home}>
      <ThisDay />
      <ThisDayInfo />
    </div>
  )
}
