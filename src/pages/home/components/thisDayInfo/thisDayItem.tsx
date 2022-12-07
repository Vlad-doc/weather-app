import React from "react"
import IndicatorSVGSelector from "../../../../assets/icons/indicators/indicatorSVGSelector"
import { Item } from "./thisDayInfo"
import s from "./thisDayInfo.module.scss"

interface Props {
  item: Item
}

const ThisDayItem = ({ item }: Props) => {
  const { icon_id, value, name } = item
  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <IndicatorSVGSelector id={icon_id} />
      </div>
      <div className={s.indicator__name}>{name}</div>
      <div className={s.indicator__value}>{value}</div>
    </div>
  )
}

export default ThisDayItem
