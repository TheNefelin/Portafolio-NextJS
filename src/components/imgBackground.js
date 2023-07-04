import styles from './imgBackground.module.css'
import Image from 'next/image'

export default function ImgBackground(props) {
  return (
    <Image 
      className={styles.img}
      src={props.img}
      alt={props.alt}
      fill={true}
    />
  )
}
