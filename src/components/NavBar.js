
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <h2 className={styles.logo}>Restaurante Gourmet</h2>
      <ul className={styles.menu}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Cardápio</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}
