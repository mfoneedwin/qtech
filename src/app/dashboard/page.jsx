'use client'
import React, { useEffect, useState } from 'react'
import styles from './dasboard.module.css'
import useSWR from 'swr'

const Dashboard = () => {
    // const [data, setData] = useState([])
    // const [err, setErr] = useState(false)
    // const [isLoading, setIsLaoding] = useState(false)

    // useEffect(() => {
    //     const getData = async () => {
    //         setIsLaoding(true)
    //         const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    //             cache: 'no-store',
    //         })

    //         if (!res.ok) {
    //             setErr(true)
    //         }
    //         const data = await res.json()

    //         setData(data)
    //         setIsLaoding(false)
    //     }
    //     getData()
    // }, [])

    const fetcher = (...args) => fetch(...args).then((res) => res.json())

    const { data, error, isLoading } = useSWR('', fetcher)

    return <div className={styles.container}>dashboard</div>
}

export default Dashboard
