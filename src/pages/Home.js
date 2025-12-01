
import React from 'react';
import styles from './Home.module.css';
import CardInfo from '../components/CardInfo'; 

function Home() {
  return (
    <div className={styles.homeContainer}> 
      <h1 className={styles.mainTitle}>Conheça Nosso Sistema Solar ☀️</h1>
      <p className={styles.leadText}>
        Uma jornada interplanetária para descobrir os corpos celestes que orbitam nossa estrela.
      </p>

      {/* Usa a classe para organizar os cartões */}
      <div className={styles.cardGrid}> 
        <CardInfo 
          title="O Sol"
          icon="🔥"
          description="A estrela central do sistema. Uma esfera de plasma quente que irradia energia."
        />
        <CardInfo 
          title="Planetas Rochosos"
          icon="🌎"
          description="Mercúrio, Vênus, Terra e Marte, compostos principalmente de rocha e metal."
        />
        <CardInfo 
          title="Gigantes Gasosos"
          icon="🪐"
          description="Júpiter e Saturno, gigantes formados por hidrogênio e hélio."
        />
        <CardInfo 
          title="Corpos Menores"
          icon="☄️"
          description="Asteroides, cometas e planetas anões, como Plutão, residem nas bordas."
        />
      </div>
      
    </div>
  );
}

export default Home;