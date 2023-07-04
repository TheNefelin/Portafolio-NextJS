import styles from './videoYoutube.module.css'
import { myYoutube } from '@/data/data'

export default function VideoYoutube(props) {
  return (
    <section className={styles.section}>
      {myYoutube.map((e, index) => (
        <iframe
          key={index}
          type="text/html"
          frameborder="0"
          src={`https://www.youtube.com/embed/${e.videoId}`}
        />
      ))}
    </section>
  )
}
