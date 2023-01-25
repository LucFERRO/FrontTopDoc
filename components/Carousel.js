import { useState, useEffect } from 'react'
import style from '../styles/Carousel.module.scss'
import dayjs from "dayjs";
import toObject from 'dayjs/plugin/toObject'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(toObject)
dayjs.extend(relativeTime)
require("dayjs/locale/en");

export default function Carousel({chosenMonth, chosenDayIndex, setChosenDayIndex}) {

  if (!chosenMonth) return  

  return (
    <div className={style.container}>
        <div className={style.carousel}>
            {chosenMonth.map((day,i) => <div key={i} onClick={() => setChosenDayIndex(i)} className={i==chosenDayIndex ? style.chosen_day : style.day}>
                <p>{dayjs(day.date).format('ddd')}</p>
                <p>{dayjs(day.date).format('D')}</p>
            </div>)}
        </div>
    </div>
  )
}
