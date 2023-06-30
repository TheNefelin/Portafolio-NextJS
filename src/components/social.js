import styles from "@/components/social.module.css"
import Image from "next/image"

import imgPerfil from "@/assets/b-perfil.jpg"
import imgGitHub from "@/assets/social/b-github.png"
import imgGitWww from "@/assets/social/b-internet.png"
import imgLinkedIn from "@/assets/social/b-linkedin.png"

const getLinks = (props) => {
  if (props.length > 0) {
    return (
      <>
        {props.map((e, index) => (
          <a key={index} href={e.link} target="_blank">{e.nombre}</a>
        ))}
      </>
    )
  } else {
    return (
      <p>No Links Available</p>
    )
  }
}

export function Social02(props) {
  const { myWebLinks, myGitLinks } = props;

  return (
    <section>
      <div className={styles.title}>
        <Image
          src={imgGitWww}
          width={30}
          height={30}
          alt="GitHub"
        />
        <p>Web Deploy</p>
      </div>
      <div className={styles.links}>
        {getLinks(myWebLinks)}
      </div>
      <div className={styles.title}>
        <Image
          src={imgGitHub}
          width={30}
          height={30}
          alt="GitHub"
        />
        <p>GitHub Links</p>
      </div>
      <div className={styles.links}>
        {getLinks(myGitLinks)}
      </div>
    </section>
  )
}
