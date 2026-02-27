'use client';
import Image from 'next/image';
import styles from './Arrow.module.scss';

export default function Delete({ onClick, direction = 'left' }) {
  return (
    <button
      onClick={() => onClick()}
      className={direction == 'right' ? styles.right : styles.left}
    >
      {' '}
      <Image src="./icons/arrow.png" width={30} height={30} alt="image error" />
    </button>
  );
}
