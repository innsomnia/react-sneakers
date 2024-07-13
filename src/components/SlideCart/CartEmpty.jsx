import { useContext } from 'react'
import styles from './CartEmpty.module.scss'
import { AppContext } from '../../App'

export const CartEmpty = ({ image, title, description }) => {
  const { setIsOrder, setOpenSlide } = useContext(AppContext)
  const closeSlide = () => {
    setIsOrder(false)
    setOpenSlide(false)
  }
  return (
    <div className={styles.emptyBlockCart}>
      <img src={image} alt='' />
      <h2>{title}</h2>
      <span>{description}</span>
      <button onClick={closeSlide} className={styles.backBtn}>
        <img src='/img/ArrowReverse.svg' alt='' />
        Вернуться
      </button>
    </div>
  )
}
