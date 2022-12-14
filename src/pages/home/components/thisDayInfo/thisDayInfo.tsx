import React from "react"
import s from "./thisDayInfo.module.scss"
import cloud from "../../../../assets/images/cloud.png"
import ThisDayItem from "./thisDayItem"

type Props = {}

export interface Item {
  icon_id: string
  name: string
  value: string
}

const ThisDayInfo = (props: Props) => {
  const items = [
    {
      icon_id: "temp",
      name: "temperature",
      value: "20° feels like 17°",
    },
    {
      icon_id: "pressure",
      name: "pressure",
      value: "765 mmHg - normal",
    },
    {
      icon_id: "precipitation",
      name: "precipitation",
      value: "No precipitation",
    },
    {
      icon_id: "wind",
      name: "wind",
      value: "3 m/s southwest - light breeze",
    },
  ]
  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        {items.map((item) => (
          <ThisDayItem item={item} key={item.icon_id} />
        ))}
      </div>
      <img src={cloud} alt="cloud" className={s.cloud__image} />
    </div>
  )
}

export default ThisDayInfo
