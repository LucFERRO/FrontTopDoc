import React, { useState, useEffect } from 'react'
import { apiService } from '../services/APIService'
import style from '../styles/Slots.module.scss'

export default function AvailableSlots() {
    const [plannings, setPlannings] = useState()

    useEffect(() => {
        apiService.get('plannings/test/1').then(response => {
            console.log(response.data)
            setPlannings(response.data.friday)
        })

    }, [])

console.log(plannings)

    if (!plannings) return
    return (
        <div>
            <p>
                AvailableSlots
            </p>
            <div className={style.slots}>
                {plannings.map((planning,i) => {
                    return <div key={i}>{planning}</div>
                })}
            </div>
        </div>
    )
}