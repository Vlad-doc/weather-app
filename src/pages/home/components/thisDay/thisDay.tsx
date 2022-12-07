import React from "react"
import { GlobalSvgSelector } from "../../../../assets/icons/global/globalSvgSelector"
import s from "./thisDay.module.scss"

type Props = {}

const ThisDay = (props: Props) => {
  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>20°</div>
          <div className={s.this__day_name}>Today</div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Time: <span>21:55</span>
        </div>
        <div className={s.this__city}>
          City: <span>St. Petersburg</span>
        </div>
      </div>
    </div>
  )
}

export default ThisDay
