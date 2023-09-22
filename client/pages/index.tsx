import React from 'react'
// internal import
import styles from '@/styles/index.module.css'
import { Hero } from '@/components'

const Home = () => {
  return (
    <div className={styles.homepage}>
      <Hero />
    </div>
  )
}

export default Home