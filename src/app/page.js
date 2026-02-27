'use client';
import Image from 'next/image';
import styles from './page.module.scss';
import buttonStyles from './components/Button/Button.module.scss';
import Arrow from './components/Arrow/Arrow';
import Card from './components/Card/Card';
import { useState } from 'react';
import Link from 'next/link';
import { useAppContext } from './context/index';

export default function Home() {
  const { words, setWords } = useAppContext();
  const [currentWord, setCurrentWord] = useState(0);

  function handleWordNavigation(increment = true) {
    if (increment) {
      currentWord == words.length - 1
        ? {}
        : setCurrentWord(() => currentWord + 1);
    } else {
      currentWord == 0 ? {} : setCurrentWord(() => currentWord - 1);
    }
  }

  return (
    <div className={styles.container}>
      <p>
        {currentWord + 1}/{words.length}
      </p>
      <Card word={words.length === 0 ? {} : words[currentWord]} />
      <div className={styles.navigation}>
        <Arrow onClick={() => handleWordNavigation(false)} direction="left" />

        <Link className={buttonStyles.button} href="/editWords">
          <Image
            src="./icons/edit.png"
            width={30}
            height={30}
            alt="image error"
          />
        </Link>

        <Arrow onClick={() => handleWordNavigation()} direction="right" />
      </div>
    </div>
  );
}
