import styles from './cafeterias.module.scss';
import data from './cafeteria.json';
import { CgPin, CgSearch } from 'react-icons/cg';

const Cafeteira = () => {
  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <div key={index}>
          <div className={styles.container__address}>
            <img
              src={item.img}
              alt={item.nome}
              className={styles.container__img}
            />
            <h3 className={styles.container__overlay}>{item.nome}</h3>
            <div className={styles.container__text}>
              <CgPin
                size={20}
                color="#000"
                style={{
                  marginRight: 10,
                }}
              />
              <span>{item.endereco}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cafeteira;
