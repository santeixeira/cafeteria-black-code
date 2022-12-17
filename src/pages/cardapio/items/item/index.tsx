import styles from "./item.module.scss";
import items from "../items.json";
import classNames from "classnames";

type IItem = typeof items[0];

const Item = (props: IItem) => {
  const { title, description, category, size, serving, price, photos } = props;
  return (
    <div className={styles.item}>
      <div className={styles.item__img}>
        <img src={photos} alt="" />
      </div>
      <div className={styles.item__descricao}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.item__tags}>
          <div
            className={classNames({
              [styles.item__tipo]: true,
              [styles[`item__tipo__${category.id}`]]: true,
            })}
          >
            {category.label}
          </div>
          <div className={styles.item__porcao}>{size} mL</div>
          <div className={styles.item__qtdpessoas}>
            Serve {serving} pessoa{serving === 1 ? "" : "s"}
          </div>
          <div className={styles.item__valor}>R$ {price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
