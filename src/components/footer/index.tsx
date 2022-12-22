import { Link } from 'react-router-dom';
import Logo from '../logo';
import styles from './footer.module.scss';
import routes from './footer.json';

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.footer__block}>
          <Logo />
        </div>
        <div className={styles.footer__block}>
          <ul className={styles.menu__list}>
            {routes.map((route, index) => (
              <li key={index} className={styles.menu__link}>
                <Link to={route.to}>{route.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footer__block}>
          <ul className={styles.menu__list}>
            {routes.map((route, index) => (
              <li key={index} className={styles.menu__link}>
                <Link to={route.to}>{route.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footer__block}>
          <ul className={styles.menu__list}>
            {routes.map((route, index) => (
              <li key={index} className={styles.menu__link}>
                <Link to={route.to}>{route.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footer__block}>
          <p>Rua Carlo Ancelloti, 1203</p>
          <p>Tel: +55 (11) 3300-0021</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
