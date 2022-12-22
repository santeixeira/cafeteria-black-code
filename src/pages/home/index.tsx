import menu from '../../data/menu.json';
import styles from './home.module.scss';

const Home = () => {
  let recommended = [...menu];
  recommended = recommended.sort(() => 0.5 - Math.random()).splice(0, 2);
  return (
    <section>
      <h3 className={styles.title}>Recomendados</h3>
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
        <h3 className={styles.cafeterias__titulo}>Nossas cafeterias</h3>
      </div>
    </section>
  );
};

export default Home;
