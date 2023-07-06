import React from 'react'
import styles from './portfolio.module.css'
import Link from 'next/link'

export const metadata = {
    title: 'Qtech Works Information',
    description:
        'We make your design your project with the best updated technologies',
}

const Portfolio = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.selectTitle}> Choose a gallery </h1>{' '}
            <div className={styles.items}>
                <Link href='/portfolio/illustrations' className={styles.item}>
                    <span className={styles.title}> Illustration </span>{' '}
                </Link>{' '}
                <Link href='/portfolio/websites' className={styles.item}>
                    <span className={styles.title}> Websites </span>{' '}
                </Link>{' '}
                <Link href='/portfolio/applications' className={styles.item}>
                    <span className={styles.title}> Application </span>{' '}
                </Link>{' '}
            </div>{' '}
        </div>
    )
}

export default Portfolio
