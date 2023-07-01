import styles from './title.module.css'

export default function Title(props) {
  return (
    <section className={styles.section}>
      <span className={styles.color1}>{`const `}</span>
      <span>{`${props.txt} `}</span>
      <span className={styles.color4}>{`= `}</span>
      <span className={styles.color2}>{`( ) `}</span>
      <span className={styles.color4}>{`=> `}</span>
      <span className={styles.color1}>{`{ `}</span>
      <span className={styles.color3}>{`...`}</span>
    </section>
  )
}
