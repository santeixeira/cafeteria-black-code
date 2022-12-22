import styles from './buttons.module.scss';

const MainButton = () => {
  return (
    <button className={styles.__main_button}>
      <span className={styles.__main_txt}>Props</span>
    </button>
  );
};

export default MainButton;
