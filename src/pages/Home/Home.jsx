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
            name="Bruno Filipe"
            role="Desenvolvedor de Software"
            image="https://avatars2.githubusercontent.com/u/37847186?s=460&v=4"
            description="\o/"
          />
          <Card
            name="Pâmela Fernanda"
            role="Estudante de Desenvolvimento"
            image="https://instagram.fsdu17-1.fna.fbcdn.net/vp/d1792f66ad15a410e4224cff6d19d904/5E245E34/t51.2885-15/e35/s150x150/69897761_157549648670245_2425795837158383202_n.jpg?_nc_ht=instagram.fsdu17-1.fna.fbcdn.net&_nc_cat=101"
            description="\o/"
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
