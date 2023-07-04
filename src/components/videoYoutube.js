import styles from './videoYoutube.module.css'

export default function VideoYoutube() {
  return (
    <iframe
      id="ytplayer"
      type="text/html"
      width="100%"
      height="360"
      src={`https://www.youtube.com/embed/0WsjRYgZMzs`}
      frameborder="0"
    />
  )
}
