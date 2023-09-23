import React from 'react'
// internal import
import styles from '@/styles/index.module.css'
import { Hero, Services } from '@/components'

const Home = () => {
  return (
    <div className={styles.homepage}>
      <Hero />
      <Services />
    </div>
  )
}

export default Home