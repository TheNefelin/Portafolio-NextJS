import styles from './social.module.css'
import Image from "next/image"

import imgGitHub from '@/assets/social/github.png'
import imgLinkedin from '@/assets/social/linkedin.png'
import imgTwitch from '@/assets/social/twitch.png'
import imgYoutube from '@/assets/social/youtube.png'

export default function Social(props) {
  return (
    <section className={styles.section}>
      <a 
        className={styles.imgGitHub}
        href="https://github.com/thenefelin"
        target='_blank'
      >
        <span>
          <Image
            src={imgGitHub}
            width={40}
            height={40}
            alt={"GitHub"}
          />
        </span>
      </a>
      <a 
        className={styles.imgTwitch}
        href="https://www.twitch.tv/thenefelin"
        target='_blank'
      >
        <span>
          <Image
            src={imgTwitch}
            width={40}
            height={40}
            alt={"Twitch"}
          />
        </span>
      </a>
      <a 
        className={styles.imgYoutube}
        href="https://www.youtube.com/c/TheNefelin"
        target='_blank'
      >
        <span>
          <Image
            src={imgYoutube}
            width={40}
            height={40}
            alt={"Youtube"}
          />
        </span>
      </a>
      <a
       className={styles.imgLinkedin}
       href="https://www.linkedin.com/in/nefelin/"
       target='_blank'
      >
        <span>
          <Image
            src={imgLinkedin}
            width={40}
            height={40}
            alt={"LinkedIn"}
          />
        </span>
      </a>
    </section>
  )
}
