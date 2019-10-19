import React from 'react'

import HacktoberfestLogo from 'assets/icons/hacktoberfest'
import NataHouseIcon from 'assets/icons/natahouse'
<<<<<<< HEAD
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
=======
import { CardList } from 'components'

import styles from './Home.module.scss'
>>>>>>> 8fe3e7230f7d71a2c530617421b6a83603466b76

const Home = () => (
  <div className={styles.container}>
    <header className={styles.header}>Hacktoberfest BH 2019</header>
    <main className={styles.main}>
<<<<<<< HEAD
      <div className={styles.content}>
        { getPerfisAndGenerateCards() }
      </div>
=======
      <CardList />
>>>>>>> 8fe3e7230f7d71a2c530617421b6a83603466b76
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
