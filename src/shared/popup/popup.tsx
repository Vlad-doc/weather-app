import React from "react"
import { GlobalSvgSelector } from "../../assets/icons/global/globalSvgSelector"
import ThisDayItem from "../../pages/home/components/thisDayInfo/thisDayItem"
import s from "./popup.module.scss"

interface Props {}

export const Popup = (props: Props) => {
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
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day__temp}>20°</div>
          <div className={s.day__name}>Среда</div>
          <div className={s.img}>
            <GlobalSvgSelector id="sun" />
          </div>
          <div className={s.day__time}>
            Время: <span>21:54</span>
          </div>
          <div className={s.day__city}>
            Время: <span>Санкт-Петербург</span>
          </div>
        </div>
        <div className={s.this__day_info_items}>
          {items.map((item) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={s.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  )
}
