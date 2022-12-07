import React from "react"
import s from "./days.module.scss"
import { Day } from "./days"
import { GlobalSvgSelector } from "../../../../assets/icons/global/globalSvgSelector"

type Props = {
  day: Day
}

const Card = ({ day }: Props) => {
  return (
    <div className={s.card}>
      <div className={s.day}>{day.day}</div>
      <div className={s.day__info}>{day.day_info}</div>
      <div className={s.img}>
        <GlobalSvgSelector id={day.icon_id} />
      </div>
      <div className={s.temp__day}>{day.temp_day}</div>
      <div className={s.temp__night}>{day.temp_night}</div>
      <div className={s.day__info}>{day.info}</div>
    </div>
  )
}

export default Card
