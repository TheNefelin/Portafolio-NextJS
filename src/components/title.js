import styles from './title.module.css'

export default function Title(props) {
  return (
    <section className={styles.section}>
      <span>{`const `}</span>
      <span>{`${props.txt}`}</span>
      <span>{` = ( ) => { ...`}</span>
    </section>
  )
}
