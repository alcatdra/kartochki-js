import React, { Children } from 'react';
import styles from './ListItem.module.scss';
import { Chicle } from 'next/font/google';
import Delete from '../Delete/Delete';

export default function ListItem({
  item,
  translation,
  onDeleteItem,
  children,
}) {
  return (
    <li className={styles.li}>
      <div className={styles.item}>
        <span style={{ fontWeight: 700 }}>{item.word}</span> -{' '}
        {item.translation}
      </div>
      <Delete onDeleteItem={onDeleteItem} item={item} />
    </li>
  );
}
