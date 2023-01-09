import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <>
            <Head>
                <title>TopDoc</title>
                <link rel="icon" href="Pharmacy.svg" type="image/gif" />
            </Head>

            <div className={styles.container}>
               TOPDOC
            </div>
            <Image src={'/Pharmacy.svg'} alt="logo" width="350px" height="300px"/>
        </>
    )
}
