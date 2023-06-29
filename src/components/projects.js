import Image from 'next/image'
import styles from './projects.module.css'
import { projects } from '@/data/data'

import img from '@/assets/demo.jpg'

const imgCover = require.context('@/assets/cover', true);
const imgCoverList = imgCover.keys().map(image => imgCover(image));
console.log(imgCoverList[0].default)

const images = require.context('@/assets/languages', true);
const imageList = images.keys().map(image => images(image));

// const ImageGallery = () => {
//   return (
//     <div>
//       {/* {projects.map((e, eIndex) => {
//         console.log(e)
//       })} */}
//       {console.log("-----------------------")}
//       {console.log(imageList[2].default)}
//       {console.log("-----------------------")}
//       {imageList.map((image, index) => (
//         <Image
//           key={index}
//           src={image.default}
//           alt={`image-${index}`}
//           height={50}
//         />
//       ))}
//     </div>
//   );
// }

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
            </div>
            <div className={styles.cardBack}>
              <p>GitHub</p>
                {git()}
              <p>Web Deploy</p>
                {web()}
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
