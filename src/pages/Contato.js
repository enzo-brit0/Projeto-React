import React from 'react';
import styles from './Contato.module.css';

function Contato() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada! Agradecemos seu interesse no cosmos.');
    // Aqui você adicionaria a lógica para enviar os dados, se fosse um projeto full-stack
  };

  return (
    <div className={styles.contatoContainer}>
      <h1 className={styles.title}>Entre em Contato com a Estação Espacial</h1>
      <p className={styles.description}>
        Tem perguntas sobre o Sistema Solar, sugestões ou quer colaborar? Envie sua mensagem cósmica!
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="nome" className={styles.label}>Nome Completo:</label>
          <input type="text" id="nome" className={styles.input} required />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>E-mail:</label>
          <input type="email" id="email" className={styles.input} required />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="mensagem" className={styles.label}>Sua Mensagem Cósmica:</label>
          <textarea id="mensagem" rows="5" className={styles.textarea} required></textarea>
        </div>
        
        <button type="submit" className={styles.button}>
          Enviar Mensagem 🚀
        </button>
      </form>
    </div>
  );
}

export default Contato;