import { useState, useEffect } from 'react'
import { apiService } from '../services/APIService'
import style from '../styles/DateScrolling.module.scss'
import { AiFillCaretDown } from 'react-icons/ai'
import Carousel from './Carousel'
const dayjs = require("dayjs");
const toObject = require('dayjs/plugin/toObject')
dayjs.extend(toObject)
require("dayjs/locale/en");

const months2 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']



export default function DateScrolling() {

    const [currentYear, setCurrentYear] = useState()
    const [chosenMonth, setChosenMonth] = useState()
    const [chosenMonthDays, setChosenMonthDays] = useState()
    const [chosenDay, setChosenDay] = useState()
    const [isModal, setIsModal] = useState(false)

    let isCurrentYearBissextile = (currentYear%4 == 0 && currentYear%100 != 0) || currentYear%400 == 0

    const months = [
        { id: 0, name: 'January', daysInMonth: 31 },
        { id: 1, name: 'February', daysInMonth: isCurrentYearBissextile ? 29 : 28 },
        { id: 2, name: 'March', daysInMonth: 31 },
        { id: 3, name: 'April', daysInMonth: 30 },
        { id: 4, name: 'May', daysInMonth: 31 },
        { id: 5, name: 'June', daysInMonth: 30 },
        { id: 6, name: 'July', daysInMonth: 31 },
        { id: 7, name: 'August', daysInMonth: 31 },
        { id: 8, name: 'September', daysInMonth: 30 },
        { id: 9, name: 'October', daysInMonth: 31 },
        { id: 10, name: 'November', daysInMonth: 30 },
        { id: 11, name: 'December', daysInMonth: 31 }
    ]

    useEffect(() => {
        // let todayObj = dayjs(new Date()).toObject()
        // console.log(todayObj)

        let today = dayjs().format('YYYY-MM-D-dddd/HH-mm-ss')
        let date = today.split('/')[0]
        setCurrentYear(date.split('-', 1)[0])
        let time = today.split('/')[1]
        setChosenMonth(months[parseInt(date[1])])
        setChosenDay({ date: parseInt(date.split('-')[2]), day: date.split('-')[3] })

    }, [])

    useEffect( () => {
        setChosenMonthDays(listOfDaysInChosenMonth())
    }, [chosenMonth])

    const listOfDaysInChosenMonth = (year, month) => {
        let currentMonth = dayjs().startOf('month')
        let dayList = []
        let i = 0;

        while (currentMonth.format('M') == currentMonth.add(i,'day').format('M')) {
            dayList.push(currentMonth.add(i,'day').format('ddd-D').split('-'));
            i = i+1
        }
        console.log(dayList)
        return dayList
    }




    return (
        <div className={style.container}>
            <div className={style.header}>
                <p className={style.header_top_left}>Date:</p>
                <div className={style.header_top_right}>
                    <select onChange={(e) => setChosenMonth({ id: parseInt(e.target.value), name: months[e.target.value].name, daysInMonth: months[e.target.value].daysInMonth })} className={style.select_month}>
                        {months.map(month => <option key={month.id} value={month.id}>{month.name}</option>)}
                    </select>
                    <AiFillCaretDown />
                </div>

            </div>
            <div>
                <Carousel chosenMonth={chosenMonth} setChosenMonth={setChosenMonth} chosenMonthDays={chosenMonthDays} chosenDay={chosenDay} setChosenDay={setChosenDay} />
            </div>
        </div>
    )
}
