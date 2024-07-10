import styles from './CartEmpty.module.scss'

export const CartEmpty = ({ closeCart }) => {
  return (
    <div className={styles.emptyBlockCart}>
      <img src='/img/box.svg' alt='' />
      <h2>Корзина пустая</h2>
      <span>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</span>
      <button onClick={closeCart} className={styles.backBtn}>
        <img src='/img/ArrowReverse.svg' alt='' />
        Вернуться
      </button>
    </div>
  )
}
