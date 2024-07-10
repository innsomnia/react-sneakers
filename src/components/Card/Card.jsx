import { useContext, useEffect, useState } from 'react'
import styles from './Card.module.scss'
import { AppContext } from '../../App'
import Loader from './Loader'

export const Card = ({ id, title, price, imageUrl }) => {
  const [favorite, setFavorite] = useState(false)
  const [isAdded, setIsAdded] = useState(false)

  const { setCartItems, cartItems, favorites, setFavorites, isLoading } = useContext(AppContext)

  useEffect(() => {
    if (cartItems?.find((sneaker) => sneaker.id === id)) {
      setIsAdded(true)
    } else {
      setIsAdded(false)
    }
  }, [cartItems, id])

  useEffect(() => {
    if (favorites.find((favSneaker) => favSneaker.id === id)) {
      setFavorite(true)
    } else {
      setFavorite(false)
    }
  }, [favorites, id])

  const onClickPlus = () => {
    const filteredCartSneakers = cartItems.some((sneaker) => sneaker.id === id)
      ? cartItems.filter((sneaker) => sneaker.id !== id)
      : [...cartItems, { id, title, price, imageUrl }]

    setCartItems(filteredCartSneakers)
    localStorage.setItem('cartItems', JSON.stringify(filteredCartSneakers))
  }

  const onClickFavorite = () => {
    const filteredFavSneakers = favorites.some((sneaker) => sneaker.id === id)
      ? favorites.filter((sneaker) => sneaker.id !== id)
      : [...favorites, { id, title, price, imageUrl }]
    setFavorites(filteredFavSneakers)
    localStorage.setItem('favoritesItems', JSON.stringify(filteredFavSneakers))
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.card}>
            <div className={styles.favorites}>
              <img
                onClick={onClickFavorite}
                src={favorite ? '/img/Favorites.svg' : '/img/Not favorites.svg'}
                alt=''
              />
            </div>

            <img className={styles.mainImg} src={imageUrl} alt='' />
            <h5>{title}</h5>
            <div className={styles.cardBottom}>
              <div className={styles.cardPrice}>
                <span>Цена:</span>
                <b>{price + ' руб.'}</b>
              </div>

              <img
                onClick={onClickPlus}
                src={isAdded ? '/img/Added.svg' : '/img/plus.svg'}
                alt=''
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}
