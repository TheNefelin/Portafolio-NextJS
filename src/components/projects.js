import Image from 'next/image'
import styles from './projects.module.css'
import { projects } from '@/data/data'
import { Social02 } from '@/components/social'
import imgGitHub from "@/assets/social/b-github.png"
import imgLinkedIn from "@/assets/social/b-linkedin.png"

const imgCover = require.context('@/assets/cover', true);
const imgCoverList = imgCover.keys().map(image => imgCover(image));

const imgLang = require.context('@/assets/languages', true);
const imgLangList = imgLang.keys().map(image => imgLang(image));

const imgTec = require.context('@/assets/technologies', true);
const imgTecList = imgTec.keys().map(image => imgTec(image));

const imglanguages = (props) => {
  return (
    <>
      {props.map((e, index) => (
        <Image
          key={index}
          src={imgLangList[e].default}
          alt={`image-${index}`}
          height={50}
        />
      ))}
    </>
  )
}

const imgTechnologies = (props) => {
  return (
    <>
      {props.map((e, index) => (
        <Image
          key={index}
          src={imgTecList[e].default}
          alt={`image-${index}`}
          height={50}
        />
      ))}
    </>
  )
}

const git = () => {
  return (
    <>
      Lista Linsks
    </>
  )
}

const web = () => {
  return (
    <>
      Lista Web
    </>
  )
}

const cards = () => {
  return (
    <>
      {projects.map((e, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.cardInner}>
            <div className={styles.cardFront}>
              <h3>{e.nombre}</h3>
              <Image
                src={imgCoverList[e.caratulaIndex].default}
                style={{ objectFit: "cover" }}
                width={200}
                height={120}
                alt={e.nombre}
              />
              {imglanguages(e.lenguajesIndex)}
              {imgTechnologies(e.tecnologiasIndex)}
            </div>
            <div className={styles.cardBack}>
              <Social02 myWebLinks={e.web} myGitLinks={e.gitHub}/>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default function Projects() {
  return (
    <section className={styles.section}>
      {cards()}
    </section>
  )
}
