import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../components/navbar.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles['nav-container']}>
      <div className={`${styles.logo} logo`}>
        {/* Replace the link below with your portfolio logo */}
        <h2>SANDHYA RANI</h2>
      </div>
      <ul className={styles['nav-links']}>
        <li>
          <a href='#home'>HOME</a>
        </li>
        <li>
          <a href='#about'>ABOUT</a>
        </li>
        <li>
          <a href='#project'>PROJECT</a>
        </li>
        <li>
          <a href='#contact'>CONTACT</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
