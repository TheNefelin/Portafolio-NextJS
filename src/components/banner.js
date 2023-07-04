import styles from "@/components/banner.module.css"
import Image from "next/image"
import imgPerfil from "@/assets/perfil.jpg"
import imgGitHub from "@/assets/icons/b-github.png"
import imgLinkedIn from "@/assets/icons/b-linkedin.png"

export default function Banner() {
  return (
    <div className={styles.section}>
      <div className={styles.banner}>
        <Image
          className={styles.img}
          src={imgPerfil}
          width={200}
          height={200}
          alt="Francisco Carmona"
        />
        <div>
          <a href="https://github.com/TheNefelin/" target="_blank">GitHub
            <Image
              src={imgGitHub}
              width={30}
              height={30}
              alt="GitHub"
            />
          </a>
          <a href="https://www.linkedin.com/in/nefelin/" target="_blank">LinkedIn
            <Image
              src={imgLinkedIn}
              width={30}
              height={30}
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
      <div className={styles.txt}>
        <h1>{`Hi, I'm Francisco`}</h1>
        <p>{`A SOFTWARE DEVELOPER`}</p>
      </div>
    </div>
  )
}
