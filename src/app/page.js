import styles from './page.module.css'
import imgBanner from "@/assets/background/fondo_banner.jpg"
import imgMusic from "@/assets/background/fondo_music.jpg"

import ImgBackground from '@/components/imgBackground'
import Banner from '@/components/banner'
import Code from "@/components/code"
import Title from '@/components/title'
import Projects from '@/components/projects'
import VideoYoutube from '@/components/videoYoutube'
import Social from '@/components/social'

export default function Home() {
  return (
    <main>
      <ImgBackground img={imgBanner} alt={"background"}/>
      <div className={styles.banner}>
        <Banner />
      </div>
      <div className={styles.code}>
        <Title txt={"someExperience"}/>
        <Code />
      </div>
      <div className={styles.projects}>
        <Title txt={"someProjects"}/>
        <Projects />
      </div>
      <div className={styles.hobbie}>
        <ImgBackground img={imgMusic} alt={"background"}/>
        <Title txt={"someHobbies"}/>
        <VideoYoutube />
      </div>
      <div>
        <Title txt={"someSocial"}/>
        <Social />
      </div>
    </main>
  )
}
