import React from 'react';
import styles from './text.module.scss';
import { CgSearch } from 'react-icons/cg';

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ search, setSearch }: Props) => {
  return (
    <div className={styles.input_box}>
      <CgSearch
        size={20}
        color="#d0d0f2"
        style={{
          position: 'absolute',
          margin: 2.5,
        }}
      />
      <input value={search} onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar" />
    </div>
  );
};

export default Search;
