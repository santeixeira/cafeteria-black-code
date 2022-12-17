import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.__banner}>
      <img src="https://images.pexels.com/photos/129207/pexels-photo-129207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      <div className={styles.__banner_txt}>
        <h1>Lorem ipsum.</h1>
        <h2>Simples assim!</h2>
      </div>
    </div>
  );
};

export default Banner;
