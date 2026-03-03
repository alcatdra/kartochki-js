import Image from 'next/image';
import styles from './Button.module.scss';

export default function Button({ icon, onClick, style }) {
  return (
    <button onClick={() => onClick()} className={styles.button} style={style}>
      <Image src={icon} width={30} height={30} alt="image error" />
    </button>
  );
}
