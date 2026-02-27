'use client';
import styles from '../page.module.scss';
import Form from '../components/Form/Form';
import ListItem from '../components/ListItem/ListItem';
import buttonStyles from '../components/Button/Button.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import { useAppContext } from '../context/index';

function editWords() {
  const { words, setWords } = useAppContext();

  function handleAddItems(word) {
    setWords((words) => [...words, word]);
  }
  function handleDeleteItems(id) {
    setWords((words) => words.filter((word) => word.id != id));
  }

  return (
    <div className={styles.container}>
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

      <Link className={buttonStyles.button} href="/">
        <Image
          src="./icons/edit.png"
          width={30}
          height={30}
          alt="image error"
        />
      </Link>
    </div>
  );
}

export default editWords;
