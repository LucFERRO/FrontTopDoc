import React from 'react'
import Image from 'next/image'
import style from '../../styles/Find.module.scss'
import Link from 'next/link'

export default function Find() {
    return (
        <div className={style.globalContainer}>
            <div>
                <Image src={'/microscope.png'} alt="find" width="800" height="1100" />
            </div>
            <div>
                <h1 className={style.text} >Find a doctor near you</h1>
            </div>
            <div className={style.buttonContainer}>
                <Link href="/doctors">
                    <button className={style.button}>GO!</button>
                </Link>
            </div>
        </div >
    )
}
