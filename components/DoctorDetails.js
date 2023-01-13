import React, { useState } from 'react'
import style from '../styles/DoctorDetails.module.scss'
import { BsArrowLeft } from 'react-icons/bs'
import Link from 'next/link'

export default function DoctorDetails({ doctor, setDetailModal }) {

    const [yeetVariable, setYeetVariable] = useState('')

    const yeetModal = () => {
        setYeetVariable('yeetModal')
        setTimeout(() => {
            setDetailModal(false)
        }, 400)
    }

    return (
        <div className={!yeetVariable ? style.container : style.yeetModal} id={yeetVariable}>
            <div>
                <BsArrowLeft onClick={() => yeetModal()} />
                <div>{`Dr. ${doctor.lastname}`}</div>
                <div>{`${doctor.activity}`}</div>
            </div>
            <div>Bot</div>
        </div>
    )
}
