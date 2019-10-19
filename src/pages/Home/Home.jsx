import React from 'react'

import HacktoberfestLogo from 'assets/icons/hacktoberfest'
import NataHouseIcon from 'assets/icons/natahouse'
import { CardList } from 'components'

import styles from './Home.module.scss'

const Home = () => (
  <div className={styles.container}>
    <header className={styles.header}>Hacktoberfest BH 2019</header>
    <main className={styles.main}>
      <CardList />
    </main>
    <div className={styles.footer}>
      <div>
        <HacktoberfestLogo />
        <NataHouseIcon />
      </div>
    </div>
  </div>
)

export default Home
