import React from 'react'

import HacktoberfestLogo from 'assets/icons/hacktoberfest'
import NataHouseIcon from 'assets/icons/natahouse'
import { Card } from 'components'
import perfilData from './perfil.datasource';
import styles from './Home.module.scss'

function getPerfisAndGenerateCards() {
  return perfilData.map(({name, role, image, description}) => {
     return <Card
     name={name}
     role={role}
     image={image}
     description={description}
    />
  });
}

const Home = () => (
  <div className={styles.container}>
    <header className={styles.header}>Hacktoberfest BH 2019</header>
    <main className={styles.main}>
      <div className={styles.content}>
        { getPerfisAndGenerateCards() }
      </div>
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