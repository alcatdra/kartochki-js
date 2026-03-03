'use client';
import React, { useState } from 'react';
import styles from './Card.module.scss';

export default function Card({ word }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`${styles.flipCard} `}
      onClick={() => setFlipped((f) => !f)}
      role="button"
    >
      <div
        className={`${styles.flipCardInner} ${flipped ? styles.flipped : ''}`}
      >
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
