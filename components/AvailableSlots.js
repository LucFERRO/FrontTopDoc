import { useState, useEffect } from 'react'
import { apiService } from '../services/APIService'
import style from '../styles/Slots.module.scss'
import dayjs from "dayjs";
import toObject from 'dayjs/plugin/toObject'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(toObject)
dayjs.extend(relativeTime)
require("dayjs/locale/en");

export default function AvailableSlots({ change, setChange, doctorId, chosenMonthIndex, chosenDayIndex }) {

    if (!chosenMonthIndex) return
    if (!chosenMonthIndex[chosenDayIndex]) return

    console.log(chosenMonthIndex[chosenDayIndex])

    const takeAppointement = (date, time) => {
        if (confirm('Take appointement?')) {
            apiService.post('appointements', {
                appointement_date: dayjs(date).hour(time.split(':')[0]).minute(time.split(':')[1]).second(0).format('YYYY-MM-DDTHH:mm:ss'),
                doctor_id: doctorId,
                patient_id: 1000000,
                appointement_duration_minutes: chosenMonthIndex[chosenDayIndex].slot_duration,
                appointement_reason: 'test creation front'
            }).then(() => setChange(!change))
        }
    }

    const handleVacations = (slots) => {
        console.log(slots)
        if (slots != []) return slots
        console.log('slots vides')
        return [
            {
                time: 'Vacation',
                available: 'Test'
            },
            {
                time: 'Vacation',
                available: 'Test'
            }
        ]
    }

    return (
        <div>
            <p>Time</p>
            <div className={style.slot_container}>
                {handleVacations(chosenMonthIndex[chosenDayIndex].slots).map((slot, i) => {
                    return <div onClick={() => takeAppointement(chosenMonthIndex[chosenDayIndex].date, slot.time)} className={slot.available ? style.free_slot : style.unavailable_slot} key={i}>{slot.time}</div>
                })}
            </div>
        </div>
    )
}