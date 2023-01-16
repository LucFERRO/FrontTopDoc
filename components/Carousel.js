import { useState, useEffect } from 'react'
import { apiService } from '../services/APIService'
import style from '../styles/Carousel.module.scss'

export default function Carousel({chosenMonth,setChosenMonth, chosenMonthDays, chosenDay, setChosenDay}) {

    const chooseMonth = () => {

    }
    
  if (!chosenMonth) return  

  console.log(chosenMonth)

  return (
    <div onClick={chooseMonth} className={style.container}>
        <div className={style.carousel}>
            {chosenMonthDays.map(day => <div className={style.day}>
                <p>{day[0]}</p>
                <p>{day[1]}</p>
            </div>)}
        </div>
    </div>
  )
}
