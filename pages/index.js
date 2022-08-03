import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import Banner from '../components/Banner.js'
import Navbar from '../components/Navbar.js';
import BMI from '../components/BMI.js';
import Plans from '../components/Plans.js';
import Footer from '../components/Footer.js';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fitness Center</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      </Head>
      
      <Navbar />
      <Banner />
      <BMI />
      <Plans />
      <Footer />
    </div>
  )
}
