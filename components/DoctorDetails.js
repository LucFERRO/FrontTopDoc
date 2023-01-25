import React, { useState, useEffect } from 'react'
import style from '../styles/DoctorDetails.module.scss'
import { apiService } from '../services/APIService'
import { BsArrowLeft } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
import AvailableSlots from './AvailableSlots'
import DateScrolling from './DateScrolling'

export default function DoctorDetails({ doctor, setDetailModal }) {

    const [yeetVariable, setYeetVariable] = useState('')

    const [planning, setPlanning] = useState()
    const [chosenMonthIndex, setChosenMonthIndex] = useState(0)
    const [chosenDayIndex, setChosenDayIndex] = useState(0)
    const [change, setChange] = useState(false)

    useEffect(() => {
        apiService.get(`plannings/${doctor.doctor_id}/final`).then(response => {
            setPlanning(response.data)
        })
    }, [change])

    useEffect(() => {
        setChosenDayIndex(0)
    }, [chosenMonthIndex])

    const yeetModal = () => {
        setYeetVariable('yeetModal')
        setTimeout(() => {
            setDetailModal(false)
        }, 400)
    }

    if (!planning) return
    if (!doctor) doctor = { lastname: 'indian', activity: 'yes' }

    return (
        <div className={[!yeetVariable ? style.modal : style.yeetModal]}>
            <div className={style.top} >
                <div className={style.header}>
                    <div>
                        <BsArrowLeft className={style.column} onClick={() => yeetModal()} />

                    </div>
                    <div className={style.main}>
                        <div className={style.image_container}>
                            <Image className={style.profile_pic} src='/random_indian.jpg' layout='fill' />
                        </div>
                        <p className={style.lastname}>{`Dr. ${doctor.lastname}`}</p>
                        <p className={style.activity}>{`${doctor.activity}`}</p>
                    </div>
                    <div className={style.column}>{`Details`}</div>
                </div>
                <div className={style.details}>
                    <div>Détail1</div>
                    <div>Détail2</div>
                    <div>Détail3</div>
                </div>
            </div>
            <div className={style.bot}>
                <div>
                    <DateScrolling planning={planning} chosenMonthIndex={chosenMonthIndex} setChosenMonthIndex={setChosenMonthIndex} chosenDayIndex={chosenDayIndex} setChosenDayIndex={setChosenDayIndex} />
                </div>
                <div>
                    <AvailableSlots doctorId={doctor.doctor_id} change={change} setChange={setChange} chosenMonthIndex={planning[chosenMonthIndex]} chosenDayIndex={chosenDayIndex} />
                </div>
            </div>
        </div>
    )
}