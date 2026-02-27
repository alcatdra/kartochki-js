import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { AppWrapper } from './context/index';
import styles from './page.module.scss';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'kartochki-js',
  description: 'Pet project',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} `}>
        <main className={styles.page}>
          <div className={styles.main}>
            <AppWrapper> {children}</AppWrapper>
          </div>
        </main>
      </body>
    </html>
  );
}
