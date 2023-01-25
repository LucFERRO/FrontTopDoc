import { useState, useEffect } from 'react'
import { apiService } from '../services/APIService'
import style from '../styles/DateScrolling.module.scss'
import { AiFillCaretDown } from 'react-icons/ai'
import Carousel from './Carousel'
import dayjs from "dayjs";
import toObject from 'dayjs/plugin/toObject'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(toObject)
dayjs.extend(relativeTime)
require("dayjs/locale/en");

export default function DateScrolling({ planning, chosenMonthIndex, setChosenMonthIndex, chosenDayIndex, setChosenDayIndex }) {

    const [isModal, setIsModal] = useState(false)

    return (
        <div className={style.container}>
            <div className={style.header}>
                <p className={style.header_top_left}>Date</p>
                <div className={style.header_top_right}>
                    <select
                        onChange={(e) => setChosenMonthIndex(e.target.value)} 
                        className={style.select_month}>
                        {planning.map((month, i) => <option key={i} value={i}>{dayjs().month(i).format('MMMM')}</option>)}
                    </select>
                    <AiFillCaretDown className={style.downarrow} />
                </div>

            </div>
            <div>
                <Carousel chosenMonth={planning[chosenMonthIndex]} chosenDayIndex={chosenDayIndex} setChosenDayIndex={setChosenDayIndex} />
            </div>
        </div>
    )
}
