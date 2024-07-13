import { useContext } from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import { AppContext } from './../../App'

export const Header = () => {
  const { setOpenSlide, sumCart } = useContext(AppContext)

  return (
    <header className={styles.headerMain}>
      <Link to='/'>
        <div className={styles.headerLeft}>
          <img src='/img/logo.png' alt='' />
          <div>
            <h3>React sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className={styles.headerRight}>
        <li className={styles.cartBtn} onClick={() => setOpenSlide(true)}>
          <img src='/img/cart.svg' alt='' />
          <span>{sumCart} руб.</span>
        </li>
        <Link to='/favorites'>
          <li>
            <img src='/img/favorit.svg' alt='' />
            <span>Избранное</span>
          </li>
        </Link>

        <li>
          <img src='/img/user.svg' alt='' />
          <span>Профиль</span>
        </li>
      </ul>
    </header>
  )
}
