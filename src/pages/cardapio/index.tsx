import { useState } from 'react';
import styles from './cardapio.module.scss';
import Search from './buscador';
import { Slant as Hamburger } from 'hamburger-react';
import Filter from './filter';
import Sorter from './sorter';
import Items from './items';
import classNames from 'classnames';

const Cardapio = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [sorter, setSorter] = useState('');
  const [hide, setHide] = useState(false);
  return (
    <main>
      <nav className={styles.menu}>
        <div className={styles.__header}>
          <h3>Filtros</h3>
          <button onClick={() => setHide(!hide)}>
            <Hamburger />
          </button>
        </div>
      </nav>
      <section className={styles.cardapio}>
        <div
          className={classNames({
            [styles.cardapio__filter]: true,
            [styles['cardapio__filter--ativo']]: hide,
          })}
        >
          <Search search={search} setSearch={setSearch} />
          <Filter filter={filter} setFilter={setFilter} />
          <Sorter sorter={sorter} setSorter={setSorter} />
        </div>
        <Items search={search} filter={filter} sorter={sorter} />
      </section>
    </main>
  );
};

export default Cardapio;
