import React from 'react'
import Image from 'next/image'

export default function Home() {
    return <>
        <h1>TOPDOC</h1>
        <Image src={'/Pharmacy.svg'} alt="logo" width="800" height="800" />
    </>
}