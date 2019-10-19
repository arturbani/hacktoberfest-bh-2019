import React from 'react'

import HacktoberfestLogo from 'assets/icons/hacktoberfest'
import NataHouseIcon from 'assets/icons/natahouse'
import { Card } from 'components'

import styles from './Home.module.scss'
import imagemNH from '../../assets/images/nh-logo.png'
import lucasPhoto from '../../assets/images/lucas-profile.jpeg'

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>Hacktoberfest BH 2019</header>
      <main>
        <div className={styles.content}>
          <Card
            name="nata.house"
            role="Fábrica de Software"
            image={imagemNH}
            description="Estamos muito felizes em reunir essa moçada pra contribuir com a comunidade open-source \o/."
          />

          <Card
            name="Lucas"
            role="Desenvolvedor de Software"
            image={lucasPhoto}
            description="\o/."
          />
           <Card
            name="Henrique"
            role="Filósofo"
            image="http://opiniaoenoticia.com.br/wp-content/uploads/2016/09/arthur_schopenhauer_33.jpg"
            description="Estamos muito felizes em reunir essa moçada pra contribuir com a comunidade open-source \o/."
          />
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
}

export default Home
