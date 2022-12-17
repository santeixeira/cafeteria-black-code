import React from "react";
import filters from "./filters.json";
import styles from "./filters.module.scss";
import classNames from "classnames";

interface IOption {
  label: string;
  id: number;
}

interface Props {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

const Filter = ({ filter, setFilter }: Props) => {
  function selectFilter(option: IOption) {
    if (filter === option.id) return setFilter(null);
    return setFilter(option.id);
  }
  return (
    <div className={styles.filters}>
      {filters.map((option) => (
        <button
          className={classNames({
            [styles.filters__filter]: true,
            [styles["filters__filter--ativo"]]: filter === option.id,
          })}
          key={option.id}
          onClick={() => selectFilter(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;
