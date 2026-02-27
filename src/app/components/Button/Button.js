import Image from 'next/image';
import styles from './Button.module.scss';

export default function Delete({ icon, onClick, item }) {
  return (
    <button onClick={() => onClick()} className={styles.button}>
      <Image src={icon} width={30} height={30} alt="image error" />
    </button>
  );
}
