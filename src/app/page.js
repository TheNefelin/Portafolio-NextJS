import Image from 'next/image'
import styles from './page.module.css'

import Banner from '@/components/banner'
import Code from "@/components/code"
import MyLinks from "@/components/myLinks"
import imgBanner from "@/assets/fondo_banner2.png"

export default function Home() {
  return (
    <main>
      <section className={styles.section}>
        <Image
          className={styles.img}
          src={imgBanner}
          fill={true}
          style={{objectFit:"cover"}}
          alt='background image'
        />
        <div>
          <Banner />
        </div>
        <div>
          <Code />
          <Code />

          <Code />


        </div>
      </section>
    </main>
  )
}
