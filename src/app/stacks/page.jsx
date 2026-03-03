'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../page.module.scss';
import formStyles from '../components/WordsForm/WordsForm.module.scss';
import buttonStyles from '../components/Button/Button.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useAppContext } from '../context/index';
import Delete from '../components/Delete/Delete';

function StacksPage() {
  const { stacks, setStacks, setCurrentStackId } = useAppContext();
  const [newStackName, setNewStackName] = useState('');
  const router = useRouter();

  function handleCreateStack(e) {
    e.preventDefault();
    const name = newStackName.trim();
    if (!name) return;

    const id = name.toLowerCase().replace(/\s+/g, '-');
    if (stacks.some((s) => s.id === id)) return;

    setStacks((prev) => [
      ...prev,
      {
        id,
        name,
        words: [],
      },
    ]);
    setNewStackName('');
  }

  function handleDeleteStack(id) {
    if (stacks.length === 1) return;
    setStacks((prev) => prev.filter((stack) => stack.id !== id));
  }

  function handleViewStack(id) {
    setCurrentStackId(id);
    router.push('/');
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleCreateStack} className={formStyles.form}>
        <input
          type="text"
          placeholder="New stack name"
          value={newStackName}
          onChange={(e) => setNewStackName(e.target.value)}
        />
        <button type="submit">Create stack</button>
      </form>

      <ul className={styles.list}>
        {stacks.length === 0 ? (
          <p>No stacks yet.</p>
        ) : (
          stacks.map((stack) => (
            <li key={stack.id}>
              <div style={{ justifyContent: 'center' }}>
                <strong>{stack.name}</strong>
                <p>{stack.words?.length ?? 0} words</p>
              </div>
              <div className={styles.navigation}>
                <button
                  className={buttonStyles.button}
                  type="button"
                  onClick={() => handleViewStack(stack.id)}
                >
                  <Image
                    src="./icons/view.png"
                    width={30}
                    height={30}
                    alt="view"
                  />
                </button>
                <Link
                  className={buttonStyles.button}
                  href={`/editWords#${stack.id}`}
                >
                  <Image
                    src="./icons/edit-one.png"
                    width={30}
                    height={30}
                    alt="edit"
                  />
                </Link>
                <Delete onDeleteItem={handleDeleteStack} item={stack} />
              </div>
            </li>
          ))
        )}
      </ul>

      <Link className={buttonStyles.button} href="/">
        <Image src="./icons/arrow.png" width={30} height={30} alt="back" />
      </Link>
    </div>
  );
}

export default StacksPage;
