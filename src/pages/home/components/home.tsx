import React from "react"
import Days from "./days/days"
import s from "./home.module.scss"
import ThisDay from "./thisDay/thisDay"
import ThisDayInfo from "./thisDayInfo/thisDayInfo"

type Props = {}

export const Home = (props: Props) => {
  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  )
}
