import MainButton from 'src/components/buttons';
import data from './data.json';
import styles from './subjects.module.scss';

const Subjects = () => {
  return (
    <div className={styles.subtemas}>
      {data.map((item, index) => (
        <div key={index} className={styles.subtemas__description}>
          <h2 className={styles.title}>{item.title}</h2>
          <img className={styles.subtemas__img} src={item.img} alt="" />
          <p className={styles.subtemas__description__text}>
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Subjects;
