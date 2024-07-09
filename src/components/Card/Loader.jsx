import ContentLoader from 'react-content-loader'
import styles from './Loader.module.scss'

const Loader = (props) => {
  return (
    <ContentLoader
      className={styles.contentLoader}
      speed={2}
      width={190}
      height={330}
      viewBox='0 0 160 260'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
      {...props}>
      <rect x='0' y='2' rx='8' ry='8' width='32' height='32' />
      <rect x='0' y='43' rx='8' ry='8' width='150' height='112' />
      <rect x='0' y='173' rx='3' ry='3' width='150' height='15' />
      <rect x='75' y='189' rx='0' ry='0' width='1' height='0' />
      <rect x='0' y='194' rx='3' ry='3' width='93' height='15' />
      <rect x='0' y='221' rx='3' ry='3' width='80' height='24' />
      <rect x='119' y='214' rx='8' ry='8' width='32' height='32' />
    </ContentLoader>
  )
}

export default Loader
