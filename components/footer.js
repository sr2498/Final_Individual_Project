import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../components/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        {/* Replace 'your-linkedin-url', 'your-facebook-url', and 'your-github-url' with your actual profile URLs */}
        <a href='your-linkedin-url' target='_blank' rel='noopener noreferrer'>
          <img src='images/Linkdin logo.png' alt='LinkedIn' />
        </a>
        <a href='your-facebook-url' target='_blank' rel='noopener noreferrer'>
          <img src='images/facebook.png' alt='Facebook' />
        </a>
        <a href='your-github-url' target='_blank' rel='noopener noreferrer'>
          <img src='images/Github Logo.png' alt='GitHub' />
        </a>
        <a href='your-twitter-url' target='_blank' rel='noopener noreferrer'>
          <img src='images/twitter.png' alt='Twitter' />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Sandhya Rani. All rights reserved.</p>
    </footer>
  )
}

export default Footer
