import React from 'react'

import styles from './Card.module.scss'

const Card = ({ name, role, description, image }) => (
  <div className={styles.container}>
    <img
    className={styles.image}
      src={image}
      alt={`Foto de ${name}, que contribuiu na Hacktoberfest BH 2019!`}
    />
    <h3>{name}</h3>
    <span>{role}</span>
    <p>{description}</p>
  </div>
)

export default Card
