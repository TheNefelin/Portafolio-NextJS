import Image from 'next/image'
import styles from './page.module.css'
import imgBanner from "@/assets/fondo_banner.png"

import Banner from '@/components/banner'
import Code from "@/components/code"
import Projects from '@/components/projects'

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        className={styles.img}
        src={imgBanner}
        fill={true}
        style={{ objectFit: "cover" }}
        alt='background image'
      />
      <div className={styles.banner}>
        <Banner />
      </div>
      <div className={styles.code}>
        <Code />
      </div>
      <div className={styles.projects}>
        <Projects />
      </div>
    </main>
  )
}
