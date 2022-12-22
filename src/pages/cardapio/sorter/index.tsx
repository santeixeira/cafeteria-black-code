import styles from './sorter.module.scss';
import options from './options.json';
import ISorter from './ISorter';
import { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

const Sorted = ({ sorter, setSorter }: ISorter) => {
  const [open, setOpen] = useState(false);
  const nameSorter =
    sorter && options.find((option) => option.value === sorter)?.name;
  return (
    <button
      className={classNames({
        [styles.sorter]: true,
        [styles['sorter--ativo']]: sorter !== '',
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{nameSorter || 'Ordenar por'}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.sorter__options]: true,
          [styles['sorter__options--ativo']]: open,
        })}
      >
        {options.map((option) => (
          <div
            className={styles.sorter__option}
            key={option.value}
            onClick={() => setSorter(option.value)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </button>
  );
};

export default Sorted;
