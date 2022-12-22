import { useLocation } from 'react-router-dom';
import styles from './banner.module.scss';
import data from './data.json';

const Banner = () => {
  const path = useLocation().pathname;

  const title = (path: string) => {
    switch (path) {
    case '/cardapio':
      return data.map((item) => item.titles.cardapio);
    default:
      return data.map((item) => item.titles.home);
    }
  };
  const subTitles = (path: string) => {
    switch (path) {
    case '/cardapio':
      return data.map((item) => item.subtitles.cardapio);
    default:
      return data.map((item) => item.subtitles.home);
    }
  }

  return (
    <div className={styles.__banner}>
      <img
        src="https://images.pexels.com/photos/129207/pexels-photo-129207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
      <div className={styles.__banner_txt}>
        <h1>{title(path)}</h1>
        <h2>{subTitles(path)}</h2>
      </div>
    </div>
  );
};

export default Banner;
