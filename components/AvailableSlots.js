import { useState, useEffect } from 'react'
import { apiService } from '../services/APIService'
import style from '../styles/Slots.module.scss'

export default function AvailableSlots() {
    const [plannings, setPlannings] = useState()

    useEffect(() => {
        apiService.get('plannings/test/1').then(response => {
            setPlannings(response.data.monday)
        })

    }, [])


    if (!plannings) return
    return (
        <div>
            <p>
                Available Slots
            </p>
            <div className={style.slots}>
                {plannings.map((planning,i) => {
                    return <div key={i}>{planning}</div>
                })}
            </div>
        </div>
    )
}