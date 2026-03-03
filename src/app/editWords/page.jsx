'use client';
import { useEffect, useState } from 'react';
import styles from '../page.module.scss';
import Form from '../components/Form/Form';
import ListItem from '../components/ListItem/ListItem';
import buttonStyles from '../components/Button/Button.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import { useAppContext } from '../context/index';

function editWords() {
  const { stacks, setStacks, currentStackId, setCurrentStackId } =
    useAppContext();
  const [selectedStackId, setSelectedStackId] = useState(currentStackId);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;

    const exists = stacks.some((stack) => stack.id === hash);
    if (exists) {
      setSelectedStackId(hash);
      setCurrentStackId(hash);
    }
  }, [stacks, setCurrentStackId]);

  const selectedStack =
    stacks.find((stack) => stack.id === selectedStackId) ?? stacks[0];
  const words = selectedStack?.words ?? [];

  function updateStackWords(stackId, updater) {
    setStacks((prevStacks) =>
      prevStacks.map((stack) =>
        stack.id === stackId
          ? {
              ...stack,
              words: updater(stack.words ?? []),
            }
          : stack
      )
    );
  }

  function handleAddItems(word) {
    if (!selectedStack) return;
    updateStackWords(selectedStack.id, (prevWords) => [...prevWords, word]);
  }

  function handleDeleteItems(id) {
    if (!selectedStack) return;
    updateStackWords(selectedStack.id, (prevWords) =>
      prevWords.filter((word) => word.id != id)
    );
  }

  return (
    <div className={styles.container}>
      <h2>
        Editing stack:{' '}
        {selectedStack ? selectedStack.name : 'No stack selected'}
      </h2>
      <Form onAddItems={handleAddItems} />
      <ul className={styles.list}>
        {words.length === 0 ? (
          <></>
        ) : (
          words.map((item) => (
            <ListItem
              item={item}
              key={item.id}
              onDeleteItem={handleDeleteItems}
            />
          ))
        )}
      </ul>

      <div className={styles.navigation}>
        <Link className={buttonStyles.button} href="/stacks">
          <Image src="./icons/arrow.png" width={30} height={30} alt="back" />
        </Link>
      </div>
    </div>
  );
}

export default editWords;
