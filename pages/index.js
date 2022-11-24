import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eusocial</title>
        <meta name="description" content="Eusocial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href={`/title`}>Eusocial</Link>
        </h1>

        <p className={styles.description}>
          The game where we all score points by{' '}
          <code className={styles.code}>improving each other&apos;s lives!</code>
        </p>

        <div className={styles.grid}>
          <Link href={`/thing`} className={styles.card}>
            <h2>THING</h2>
            <p>This is the first thing we expect you to click on!</p>
          </Link>

          <Link href={`/verbs`} className={styles.card}>
            <h2>VERBS</h2>
            <p>When you click on them, they accomplish various things! Wow!</p>
          </Link>

          <Link href={`/design`} className={styles.card}>
            <h2>DESIGN</h2>
            <p>How Eusocial adjusts your brain chemistry to make your interactions with other beings more satisfying</p>
          </Link>

          <Link href={`/gameplay`} className={styles.card}>
            <h2>GAMEPLAY</h2>
            <p>How to win at being a social creature, something that is normal to want and possible to achieve</p>
          </Link>
        </div>
      </main>
    </div>
  )
}
