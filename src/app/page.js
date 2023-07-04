import styles from './page.module.css'
import imgBanner from "@/assets/background/fondo_banner.jpg"
import imgMusic from "@/assets/background/fondo_music.jpg"

import ImgBackground from '@/components/imgBackground'
import Banner from '@/components/banner'
import Code from "@/components/code"
import Title from '@/components/title'
import Projects from '@/components/projects'
import VideoYoutube from '@/components/videoYoutube'

export default function Home() {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <main>
      <ImgBackground img={imgBanner} alt={"background"}/>
      <div className={styles.banner}>
        <Banner />
      </div>
      <div className={styles.code}>
        <Code />
      </div>
      <div className={styles.projects}>
        <Title txt={"someProjects"}/>
        <Projects />
      </div>
      <div className={styles.hobbie}>
        <ImgBackground img={imgMusic} alt={"background"}/>
        <Title txt={"someHobbies"}/>
      </div>
      <div>
        <VideoYoutube />
      </div>
      UNDER CONSTRUCTION...
    </main>
  )
}
