import React, { useState } from 'react'
import style from '../styles/DoctorDetails.module.scss'
import { BsArrowLeft } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
import AvailableSlots from './AvailableSlots'

export default function DoctorDetails({ doctor, setDetailModal }) {


    const [yeetVariable, setYeetVariable] = useState('')

    const yeetModal = () => {
        setYeetVariable('yeetModal')
        setTimeout(() => {
            setDetailModal(false)
        }, 400)
    }

    if (!doctor) doctor = { lastname: 'indian', activity: 'yes' }

    return (
        <div className={[!yeetVariable ? style.modal : style.yeetModal]}>
            <div className={style.top} >
                <div className={style.header}>
                    <div>
                        <BsArrowLeft className={style.column} onClick={() => yeetModal()} />

                    </div>
                    <div className={style.main}>
                        <Image className={style.profile_pic} src='/random_indian.jpg' width='100' height='100' />
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
                <div>Days</div>
                <div>
                    <p>Slots</p>
                    <div>
                        <AvailableSlots />
                    </div>
                </div>
            </div>
        </div>
    )
}
