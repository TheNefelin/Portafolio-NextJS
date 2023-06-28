import styles from './code.module.css'
import { myExperience } from '@/data/data'
import { Source_Code_Pro } from 'next/font/google'

const fuente = Source_Code_Pro({
  weight: '400',
  subsets: ['latin']
})

const arr = (props) => {
  return (
    <>
      {props.map((e, index) => {
        return (
          <span key={index} className={styles.color3}>
            {` ${e}`}
            {(index < props.length -1 ? <span className={styles.color5}>,</span> : null )}
          </span>
        )
      })}
    </>
  )
}

export default function Code() {
  return (
    <section className={fuente.className}>
      <div className={styles.card}>
        <div className={styles.top}>
          <div className={styles.dots}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
          <p><strong>_&gt;</strong></p>
        </div>
        <div className={styles.bottom}>
          <div><span className={styles.color1}>{`const`}</span><span className={styles.color5}>{` myExperience `}</span> {` = `}<span className={styles.color1}>{`{`}</span></div>
          <div className={styles.tab1}><span className={styles.color2}>{`tecnologies: `}</span><span className={styles.color4}>{` [ `}{arr(myExperience.tecnologies)}{` ]`}</span>{`,`}</div>
          <div className={styles.tab1}><span className={styles.color2}>{`tools: `}</span><span className={styles.color4}>{` [ `}{arr(myExperience.tools)}{` ]`}</span>{`,`}</div>
          <div className={styles.tab1}><span className={styles.color2}>{`webProyects: `}</span><span className={styles.color1}>{`{`}</span></div>
          <div className={styles.tab2}><span className={styles.color2}>{`frontEnd: `}</span><span className={styles.color1}>{`{`}</span></div>
          <div className={styles.tab3}><span className={styles.color2}>{`js: `}</span><span className={styles.color4}>{` [ `}{arr(myExperience.webProyects.frontEnd.js)}{` ]`}</span>{`,`}</div>
          <div className={styles.tab3}><span className={styles.color2}>{`css: `}</span><span className={styles.color4}>{` [ `}{arr(myExperience.webProyects.frontEnd.css)}{` ]`}</span></div>
          <div className={styles.tab2}><span className={styles.color1}>{`}`}</span></div>
          <div className={styles.tab2}><span className={styles.color2}>{`backEnd: `}</span><span className={styles.color1}>{`{`}</span></div>
          <div className={styles.tab3}><span className={styles.color2}>{`js: `}</span><span className={styles.color4}>{` [ `}{arr(myExperience.webProyects.backEnd.js)}{` ]`}</span>{`,`}</div>
          <div className={styles.tab3}><span className={styles.color2}>{`cSharp: `}</span><span className={styles.color4}>{` [ `}{arr(myExperience.webProyects.backEnd.cSharp)}{` ]`}</span></div>
          <div className={styles.tab2}><span className={styles.color1}>{`}`}</span></div>
          <div className={styles.tab1}><span className={styles.color1}>{`}`}</span></div>
          <div className={styles.tab1}><span className={styles.color2}>{`desktopProjects: `}</span><span className={styles.color1}>{`{`}</span></div>
          <div className={styles.tab2}><span className={styles.color2}>{`fullstack: `}</span><span className={styles.color1}>{`{`}</span></div>
          <div className={styles.tab3}><span className={styles.color2}>{`vb: `}</span><span className={styles.color4}>{` [ `}{arr(myExperience.desktopProjects.fullstack.vb)}{` ]`}</span>{`,`}</div>
          <div className={styles.tab3}><span className={styles.color2}>{`cSharp: `}</span><span className={styles.color4}>{` [ `}{arr(myExperience.desktopProjects.fullstack.cSharp)}{` ]`}</span></div>
          <div className={styles.tab2}><span className={styles.color1}>{`}`}</span></div>
          <div className={styles.tab1}><span className={styles.color1}>{`}`}</span></div>
          <div><span className={styles.color1}>{`}`}</span></div>
        </div>
      </div>    
    </section>
  )
}