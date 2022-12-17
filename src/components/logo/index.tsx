import styles from "./logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo} onClick={() => {}}>
      <img
        src="http://cdn.onlinewebfonts.com/svg/img_482157.png"
        alt="logo"
        className={styles.__img}
      />
      <h1 className={styles.__txt}>Black Code</h1>
    </div>
  );
};

export default Logo;
