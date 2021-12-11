import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { MdLocationOn } from "react-icons/md";
import imgHero1 from "../public/img/img-hero-1.jpg";
import MainHero from '../components/MainHero';



export default function Home() {
  return (
    <div>
      <Head>
        <title>Thiago Castro</title>
        <meta name="description" content="Thiago Castro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MainHero />

      </main>
    </div>
  )
}
