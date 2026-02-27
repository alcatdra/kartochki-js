'use client';
import React, { useState } from 'react';
import styles from './Form.module.scss';

export default function Form({ onAddItems }) {
  const [word, setWord] = useState('');
  const [translation, setTranstlation] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!word) return;
    const newItem = { word, translation, id: Date.now() };

    onAddItems(newItem);

    setWord('');
    setTranstlation('');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input value={word} onChange={(e) => setWord(e.target.value)} />
      <input
        value={translation}
        onChange={(e) => setTranstlation(e.target.value)}
      />
      <button>Сохранить</button>
    </form>
  );
}
