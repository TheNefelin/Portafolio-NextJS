import styles from './menu.module.css'

export default function Menu() {
  return (
    <section className={styles.section}>
      <a href='#home'>Home</a>
      <a href='#someProjects'>Projects</a>
      <a href='#someHobbies'>Hobbies</a>
      <a href='#someSocials'>Socials</a>
    </section>
  )
}
