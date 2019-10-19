import React from 'react'

import HacktoberfestLogo from 'assets/icons/hacktoberfest'
import NataHouseIcon from 'assets/icons/natahouse'
import { Card } from 'components'

import styles from './Home.module.scss'
import imagemNH from '../../assets/images/nh-logo.png'
import lucasPhoto from '../../assets/images/lucas-profile.jpeg'
import rafael from '../../assets/images/indice.png'
import alessandraPhoto from '../../assets/images/alessandraPhoto.jpg'
import danielPhoto from '../../assets/images/daniel-profile.jpeg'
import luccaPhoto from '../../assets/images/lucca-profile.jpeg'
import gustavoBarros from '../../assets/images/gustavo-barros.jpeg'
import raquelPhoto from '../../assets/images/raquel-profile.jpeg'
import rodrigoPhoto from '../../assets/images/rodrigo-profile.jpeg'
import daviPhoto from '../../assets/images/davi.jpeg'
import brenoPhoto from '../../assets/images/breno.jpeg'

const Home = () => (
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
          name="Lucca"
          role="Técnico de Suporte"
          image={luccaPhoto}
          description="Sou um amante de répteis e café :)."
        />
        <Card
          name="Gustavo Barros"
          role="Product Owner"
          image={gustavoBarros}
          description="Agilismo na veia :)"
        />
        <Card
          name="Raquel Calazans"
          role="Desenvolvedora de Software"
          image={raquelPhoto}
          description=";D"
        />
        <Card
          name="Rodrigo Gomes"
          role="Estudante de Computação"
          image={rodrigoPhoto}
          description="Salve rapaziada! :D."
        />
        <Card
          name="Davi"
          role="Estudante de Computação"
          image={daviPhoto}
          description="olá,passando pra avisar que computação é massa \o/."
        />
        <Card
          name="Hactoberfest 2018"
          role="Evento"
          image="https://miro.medium.com/max/2560/1*4IylnkNDFJ1aMYAlrsZoIg.jpeg"
          description="\o/."
        />
         <Card
          name="Henrique"
          role="Filósofo"
          image="http://opiniaoenoticia.com.br/wp-content/uploads/2016/09/arthur_schopenhauer_33.jpg"
          description="Estamos muito felizes em reunir essa moçada pra contribuir com a comunidade open-source \o/."
        /> 
        <Card
          name="Daniel Lima"
          role="Desenvolvedor de Software"
          image={danielPhoto}
          description="\o/"
        />
        <Card
          name="Alessandra"
          role="Estagiária"
          image={alessandraPhoto}
          description="hello world"
        />
        <Card
          name="Ana Luíza"
          role="Estudante de Desenvolvimento"
          image="https://avatars0.githubusercontent.com/u/44124220?s=400&u=353f63ba320480d193ad4a4fe2d19f4bf6538eb3&v=4"
          description="\o/."
        />
        <Card
          name="Rafael"
          role="Analista de Sistemas"
          image={rafael}
          description="Lets Code"
        />

        <Card
          name="Breno"
          role="Analista de Sistemas"
          image={brenoPhoto}
          description="Olá, mundo!"
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

export default Home
