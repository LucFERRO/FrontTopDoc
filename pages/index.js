import Image from 'next/image'
import Home from '../components/Home'
import style from '../styles/Home.module.scss'

export default function TopDoc() {
    return <div className={style.globalContainer}>
        <Home />
    </div>
}
