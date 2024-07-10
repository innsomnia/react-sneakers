import { useContext } from 'react'
import styles from './CartItem.module.scss'
import { AppContext } from '../../App'

export const CartItem = ({ id, title, imageUrl, price }) => {
  const { deleteItemCart } = useContext(AppContext)

  return (
    <div className={styles.cartItem}>
      <img className={styles.mainImg} src={imageUrl} alt='' />
      <div className={styles.content}>
        <p>{title}</p>
        <b> {price} руб.</b>
      </div>

      <img
        onClick={() => deleteItemCart(id)}
        className={styles.deleteBtn}
        src='/img/delete-btn.svg'
        alt=''
      />
    </div>
  )
}
