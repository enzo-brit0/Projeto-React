import React from 'react';
import styles from './Sobre.module.css';

function Sobre() {
  return (
    <div className={styles.sobreContainer}>
      <h1 className={styles.title}>Sobre o Universo e a Astrofísica</h1>
      
      <section className={styles.section}>
        <h2 className={styles.subtitle}>O que é Astrofísica?</h2>
        <p className={styles.paragraph}>
          A Astrofísica é a aplicação dos princípios da física para estudar o Universo, incluindo estrelas, planetas, galáxias e a estrutura do cosmos em grande escala. Ela busca responder às maiores perguntas da humanidade: De onde viemos? Para onde vamos? Estamos sós?
        </p>
      </section>
      
      <section className={styles.section}>
        <h2 className={styles.subtitle}>Nossa Missão</h2>
        <p className={styles.paragraph}>
          Este projeto tem como objetivo desmistificar a ciência espacial e torná-la acessível. Acreditamos que o estudo do céu noturno e dos fenômenos cósmicos inspira a curiosidade e promove a educação científica em todas as idades.
        </p>
        <ul className={styles.list}>
            <li>✔️ Divulgar descobertas espaciais recentes.</li>
            <li>✔️ Apresentar os planetas do Sistema Solar de forma clara.</li>
            <li>✔️ Inspirar a próxima geração de astrônomos.</li>
        </ul>
      </section>
    </div>
  );
}

export default Sobre;