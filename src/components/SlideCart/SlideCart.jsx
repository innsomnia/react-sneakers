import { useContext } from 'react'
import CartItem from '../CartItem/CartItem'
import CartEmpty from './CartEmpty.jsx'
import styles from './SlideCart.module.scss'
import { AppContext } from '../../App.jsx'

function SlideCart({ closeCart }) {
  const { cartItems } = useContext(AppContext)

  return (
    <div className={styles.shadow}>
      <div className={styles.slideCart}>
        <h2 className={styles.headerCart}>
          Корзина
          <img onClick={closeCart} className={styles.deleteBtn} src='/img/delete-btn.svg' alt='' />
        </h2>
        {cartItems.length > 0 ? (
          <>
            <div className={styles.spaceOverflow}>
              {cartItems.map((item) => (
                <CartItem
                  item={item}
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  imageUrl={item.imageUrl}
                />
              ))}
            </div>

            <div className={styles.slideBottom}>
              <div className={styles.cartResult}>
                <p>Итого:</p>
                <div className={styles.line} />
                <b>21 498 руб.</b>
              </div>

              <div className={styles.cartResult}>
                <p>Налог 5%:</p>
                <div className={styles.line} />
                <b>1074 руб.</b>
              </div>

              <button className={styles.orderBtn}>
                Оформить заказ
                <img src='/img/Arrow.svg' alt='' />
              </button>
            </div>
          </>
        ) : (
          <CartEmpty closeCart={closeCart} />
        )}
      </div>
    </div>
  )
}

export default SlideCart
