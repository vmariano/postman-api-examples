import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    fetch('/api/episodes')
      .then((res) => res.json())
      .then((data) => {
        setEpisodes(data);
        })
  }, [])

  return (
    <>
      <Head>
        <title>Postman Api Example</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>List of episodes 1st season</h1>
        <ul>
          {episodes.map((episode:string, i:number) => (<li key={i}>{episode}</li>))}
        </ul>
      </main>
    </>
  )
}
