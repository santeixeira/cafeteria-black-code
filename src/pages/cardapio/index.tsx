import { useState } from "react";
import styles from "./cardapio.module.scss";
import Logo from "../../components/logo";
import Banner from "../../components/banner";
import Search from "./buscador";
import { Slant as Hamburger } from "hamburger-react";
import Filter from "./filter";
import Sorter from "./sorter";
import Items from "./items";

const Cardapio = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [sorter, setSorter] = useState("");
  return (
    <main>
      <nav className={styles.menu}>
        <Banner />
        <div className={styles.__header}>
          <Logo />
          <h3>Menu</h3>
          <Hamburger />
        </div>
      </nav>
      <section className={styles.cardapio}>
        <div className={styles.cardapio__filter}>
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
