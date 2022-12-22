import menu from '../../data/menu.json';
import Cafeteira from './cafeterias';
import styles from './home.module.scss';

const Home = () => {
  let recommended = [...menu];
  recommended = recommended.sort(() => 0.5 - Math.random()).splice(0, 3);
  return (
    <section>
      <h2 className={styles.title}>Recomendados</h2>
      <div className={styles.recommendations}>
        {recommended.map((item) => (
          <div key={item.id} className={styles.recommended}>
            <div className={styles.recommended__img}>
              <img src={item.photos} alt={item.title} />
            </div>
            <button className={styles.recommended__btn}>Ver mais</button>
          </div>
        ))}
      </div>
      <div className={styles.cafeterias}>
        <h2 className={styles.title}>Nossas cafeterias</h2>
        <Cafeteira></Cafeteira>
      </div>
    </section>
  );
};

export default Home;
