'use client';
import Image from 'next/image';
import styles from './page.module.scss';
import buttonStyles from './components/Button/Button.module.scss';
import Card from './components/Card/Card';
import Button from './components/Button/Button';
import { useState } from 'react';
import Link from 'next/link';
import { useAppContext } from './context/index';

export default function Home() {
  const { stacks, currentStackId } = useAppContext();
  const [currentWord, setCurrentWord] = useState(0);

  const currentStack =
    stacks.find((stack) => stack.id === currentStackId) ?? stacks[0];
  const words = currentStack?.words ?? [];

  function handleWordNavigation(increment = true) {
    if (words.length === 0) return;

    if (increment) {
      currentWord === words.length - 1
        ? {}
        : setCurrentWord(() => currentWord + 1);
    } else {
      currentWord === 0 ? {} : setCurrentWord(() => currentWord - 1);
    }
  }

  return (
    <div className={styles.container}>
      <p>
        {words.length === 0 ? 0 : currentWord + 1}/{words.length}
      </p>
      <Card word={words.length === 0 ? {} : words[currentWord]} />
      <div className={styles.navigation}>
        <Button
          onClick={() => handleWordNavigation(false)}
          icon={'./icons/arrow.png'}
        />

        <Link className={buttonStyles.button} href="/stacks">
          <Image
            src="./icons/edit.png"
            width={30}
            height={30}
            alt="image error"
          />
        </Link>

        <Button
          style={{ transform: 'rotate(180deg)' }}
          onClick={() => handleWordNavigation()}
          icon={'./icons/arrow.png'}
        />
      </div>
    </div>
  );
}
