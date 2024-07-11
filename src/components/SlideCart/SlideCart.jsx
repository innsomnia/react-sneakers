import { useContext } from 'react'
import { CartItem } from '../CartItem/CartItem'
import { CartEmpty } from './CartEmpty.jsx'
import styles from './SlideCart.module.scss'
import { AppContext } from '../../App.jsx'

export const SlideCart = () => {
  const { cartItems, setCartItems, isOrder, setIsOrder, setOpenSlide, sumCart } =
    useContext(AppContext)

  const tax = sumCart * 0.13

  const btnOrderComplete = () => {
    setIsOrder(true)
    setCartItems([])
    localStorage.removeItem('cartItems')
  }

  return (
    <div className={styles.shadow}>
      <div className={styles.slideCart}>
        <h2 className={styles.headerCart}>
          Корзина
          <img
            onClick={() => setOpenSlide(false)}
            className={styles.deleteBtn}
            src='/img/delete-btn.svg'
            alt=''
          />
        </h2>
        {cartItems.length > 0 ? (
          <>
            <div className={styles.spaceOverflow}>
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>

            <div className={styles.slideBottom}>
              <div className={styles.cartResult}>
                <p>Итого:</p>
                <div className={styles.line} />
                <b>{sumCart} руб.</b>
              </div>

              <div className={styles.cartResult}>
                <p>Налог 13%:</p>
                <div className={styles.line} />
                <b>{tax} руб.</b>
              </div>

              <button onClick={btnOrderComplete} className={styles.orderBtn}>
                Оформить заказ
                <img src='/img/Arrow.svg' alt='' />
              </button>
            </div>
          </>
        ) : (
          <CartEmpty
            onClick={() => setOpenSlide(false)}
            image={isOrder ? '/img/orderList.svg' : '/img/box.svg'}
            title={isOrder ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isOrder
                ? 'Ваш заказ #8 скоро будет передан курьерской доставке'
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
          />
        )}
      </div>
    </div>
  )
}
