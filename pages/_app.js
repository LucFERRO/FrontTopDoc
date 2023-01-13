import '../styles/globals.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return <>
        <Head>
            <title>TopDoc</title>
            <link rel="icon" href="Pharmacy.svg" type="image/gif" />
        </Head>
        <Component {...pageProps} />
    </>
}

export default MyApp
