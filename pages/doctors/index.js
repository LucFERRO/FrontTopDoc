import React, { useState } from 'react'
import { apiService } from '../../services/APIService'
import style from '../../styles/Doctorslist.module.scss'
import Navbar from '../../components/Navbar'
import DoctorDetails from '../../components/DoctorDetails'

export default function DoctorsList({ doctorsData }) {

    const [doctors, setDoctors] = useState(doctorsData)
    const [detailModal, setDetailModal] = useState(true)



    console.log(doctors)
    return (
        <div className={style.container}>
            <Navbar />
            <h1>Doctors</h1>
            <div><p>Search bar</p></div>
            <div className={style.list}>
                {
                    doctors.map((doctor,i) => {
                        return <div key={i} onClick={() => setDetailModal(true)} >{`${doctor.lastname}, expert in ${doctor.activity}`}</div>
                    })
                }
            </div>
            { detailModal && <DoctorDetails setDetailModal={setDetailModal} doctor={{lastname: 'Test', activity:'Indian'}} />}
        </div>
    )
}

export async function getServerSideProps() {
    const res = await apiService.get('doctors')

    let doctorsData = res.data

    return {
        props: {
            doctorsData
        },
    }
}