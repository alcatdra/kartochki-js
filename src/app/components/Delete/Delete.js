import Image from 'next/image';
import styles from './Delete.module.scss';

export default function Delete({ onDeleteItem, item }) {
  return (
    <button onClick={() => onDeleteItem(item.id)} className={styles.button}>
      <Image
        src="./icons/delete.png"
        width={30}
        height={30}
        alt="image error"
      />
    </button>
  );
}
