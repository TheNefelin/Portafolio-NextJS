import styles from "@/components/banner.module.css"
import Image from "next/image"
import imgPerfil from "@/assets/perfil.jpg"
import imgGitHub from "@/assets/github.png"
import imgLinkedIn from "@/assets/linkedin.png"

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
          <a>
            GitHub
            <Image
              src={imgGitHub}
              width={30}
              height={30}
              alt="GitHub"
            />
          </a>
          <a>
            LinkedIn
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
