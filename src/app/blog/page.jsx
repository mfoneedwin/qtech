import React from 'react'
import styles from './blog.module.css'
import Image from 'next/image'
import Link from 'next/link'

const getData = async () => {
    const res = await fetch('https://localhost:3000/api/posts ', {
        cache: 'no-store',
    })

    if (!res.ok) {
        throw new Error('Faild to fetch data')
    }
    return res.json()
}

const Blog = async () => {
    const data = await getData()

    return (
        <div className={styles.mainContainer}>
            {' '}
            {data.map((item) => (
                <Link
                    href={`/blog/${item._id}`}
                    className={styles.container}
                    key={item.id}
                >
                    <div className={styles.imageContainer}>
                        <Image
                            src={item.img}
                            alt=''
                            width={400}
                            height={250}
                            className={styles.image}
                        />{' '}
                    </div>{' '}
                    <div className={styles.content}>
                        <h1 className={styles.title}> {item.title} </h1>{' '}
                        <p className={styles.desc}> {item.desc} </p>{' '}
                    </div>{' '}
                </Link>
            ))}{' '}
        </div>
    )
}

export default Blog
