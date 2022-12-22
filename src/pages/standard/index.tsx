import Banner from 'src/components/banner';
import { Outlet } from 'react-router-dom';
import styleMain from '../../assets/config_scss/main.module.scss';

const Standard = () => {
  return (
    <>
      <header>
        <Banner />
      </header>
      <div className={styleMain.container}>
        <Outlet />
      </div>
    </>
  );
};

export default Standard;
