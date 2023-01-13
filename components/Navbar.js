import React from 'react'
import style from '../styles/Navbar.module.scss'
import { AiOutlineMenu } from 'react-icons/ai'

export default function Navbar() {
    return (
        <div className={style.container}>
            <AiOutlineMenu className={style.menu} />
            <p>Adresse</p>
        </div>
    )
}
