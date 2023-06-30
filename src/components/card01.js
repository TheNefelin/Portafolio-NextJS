import styles from './card01.module.css'
import Image from 'next/image'
import { projects } from '@/data/data'

import img from '@/assets/demo.jpg'

export default function Card01() {
  return (
    <div class={styles.book}>
      <p>TESTING</p>
      <div class={styles.cover}>
        <Image
          src={img}
          style={{ objectFit: "cover" }}
          width={200}
          height={120}
          alt="test"
        />
      </div>
    </div>
  )
}
