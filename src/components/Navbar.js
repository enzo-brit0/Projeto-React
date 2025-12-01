import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; 

function Navbar() {
  return (
    <nav className={styles.nav}> 
      <Link to="/" className={styles.link}>
        🌌 Home
      </Link>
      <Link to="/planetas" className={styles.link}>
        🪐 Planetas
      </Link>
      <Link to="/sobre" className={styles.link}>
        🔭 Sobre
      </Link>
      <Link to="/contato" className={styles.link}>
        📞 Contato
      </Link>
    </nav>
  );
}

export default Navbar;