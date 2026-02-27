import React from 'react';
import styles from './Card.module.scss';

export default function Card({ word }) {
  //return <div className={styles.card}>Card</div>;
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <p>{word.word}</p>
        </div>
        <div className={styles.flipCardBack}>
          <p>{word.translation}</p>
        </div>
      </div>
    </div>
  );
}
