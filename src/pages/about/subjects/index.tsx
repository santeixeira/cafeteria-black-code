import data from './data.json';
import styles from './subjects.module.scss';

const Subjects = () => {
  return (
    <div className={styles.subtemas}>
      {data.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <img src={item.img} alt="" />
          <p className='legend'>
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Subjects;
