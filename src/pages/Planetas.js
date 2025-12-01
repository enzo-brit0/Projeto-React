import React from 'react';
import styles from './Planetas.module.css';

const planetasData = [
    { nome: 'Mercúrio ', distancia: '0.4 AU' },
    { nome: 'Vênus ', distancia: '0.7 AU' },
    { nome: 'Terra ', distancia: '1.0 AU' },
    { nome: 'Marte ', distancia: '1.5 AU' },
    { nome: 'Júpiter ', distancia: '5.2 AU' },
    { nome: 'Saturno ', distancia: '9.5 AU' },
];

function Planetas() {
  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.title}>Os Oito Planetas do Sistema Solar</h2>
      <ul className={styles.planetsList}>
        {planetasData.map((planeta, index) => (
          <li key={index} className={styles.planetItem}>
            <span className={styles.planetName}>{planeta.nome}</span>
            <span className={styles.planetDetail}>Distância do Sol: {planeta.distancia}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Planetas;