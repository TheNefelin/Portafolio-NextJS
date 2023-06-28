import Image from 'next/image'
import styles from './projects.module.css'

import { projects } from '@/data/data'
import img from '@/assets/demo.jpg'
import i_csharp from '@/assets/l-csharp.svg'

export default function Projects() {
  return (
    <section className={styles.section}>
      <p><strong>{`const someProjects = ( props ) => { ...`}</strong></p>
      <div className={styles.card}>
        <div className={styles.cardInner}>
          <div className={styles.cardFront}>
            <Image 
              src={img}
              style={{objectFit:"cover"}}
              width={200}
              height={120}
              alt={projects[0].nombre}
            />
            <h3>{projects[0].nombre}</h3>
            <div>
              <Image 
                src={i_csharp}
                width={50}
                height={50}
                alt={``}
              />
            </div>
          </div> 
          <div className={styles.cardBack}>
            BACK
          </div>
        </div>
      </div>
    </section>
  )
}
