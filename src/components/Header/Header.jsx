import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

function Header(props) {
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
        <li className={styles.liCart} onClick={props.openCart}>
          <img src='/img/cart.svg' alt='' />
          <span>1205 руб.</span>
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

export default Header
