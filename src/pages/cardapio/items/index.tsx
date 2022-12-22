import { useState, useEffect } from 'react';
import Item from './item';
import itemsJson from '../../../data/menu.json';
import styles from './items.module.scss';

export interface IItems {
  search: string;
  filter: number | null;
  sorter: string;
}

const Items = (props: IItems) => {
  const [list, setList] = useState(itemsJson);
  const { search, filter, sorter } = props;

  const testSearch = (title: string) => {
    const regex = new RegExp(search, 'i');
    return regex.test(title);
  };

  const testFilter = (id: number) => {
    if (filter !== null) return filter === id;
    return true;
  };

  const toSort = (newList: typeof itemsJson) => {
    switch (sorter) {
    case 'porcao':
      return newList.sort((a, b) => (a.size > b.size ? 1 : -1));
    case 'preco':
      return newList.sort((a, b) => (a.price > b.price ? 1 : -1));
    default:
      return newList;
    }
  };

  useEffect(() => {
    const newList = itemsJson.filter(
      (itemList) =>
        testSearch(itemList.title) && testFilter(itemList.category.id)
    );
    setList(toSort(newList));
  }, [search, filter, sorter]);

  return (
    <div className={styles.row}>
      <div className={styles.items}>
        {list.map((items) => (
          <Item key={items.id} {...items} />
        ))}
      </div>
    </div>
  );
};

export default Items;
