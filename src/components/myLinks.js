import styles from '@/components/myLinks.module.css'
import { myLinks } from '@/data/data'

const renderLinks = (props) => {
  return (
    <section className={styles.seccion}>
      {props.map((e, index) => 
        <div key={index}>
          <p>{e.nombre}</p>
          {e.links.map((l, i) => 
            <a key={i} href={l.link} target='_blank'>{l.nombre}</a>
          )}
        </div>
      )}
    </section>
  )
}

export default function MyLinks() {
  return (
    <>
      {renderLinks(myLinks)}
      <div className={styles.dev}>
          © 2023 | @FranciscoDev
      </div>
    </>
  )
}
