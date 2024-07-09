import { useContext } from 'react'
import Card from '../components/Card/Card'
import styles from './Favorites.module.scss'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'

function Favorites() {
  const { favorites, searchValue, setSearchValue } = useContext(AppContext)

  const filteredItems = favorites.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <div className='content p-40 '>
      {favorites.length > 0 ? (
        <>
          <div className='d-flex justify-between align-center'>
            <h1>Мое избранное</h1>

            <div className='search-block'>
              <img src='/img/Search.svg' alt='' />
              <input
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                type='text'
                placeholder='Поиск...'
              />
              <img
                onClick={() => setSearchValue('')}
                className='deleteBtn'
                src='/img/delete-btn.svg'
                alt=''
              />
            </div>
          </div>

          <div className='card-place'>
            {filteredItems.map((item) => (
              <Card
                id={item?.id}
                key={item?.id}
                imageUrl={item?.imageUrl}
                title={item?.title}
                price={item?.price}
              />
            ))}
          </div>
        </>
      ) : (
        <div className={styles.favoritesBlockCart}>
          <img src='/img/smile.png' alt='' />
          <h2>Избранного нет</h2>
          <span>Вы ничего не добавляли в избранное</span>
          <Link to='/'>
            <button className={styles.backBtn}>
              <img src='/img/ArrowReverse.svg' alt='' />
              Вернуться
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Favorites
