import { useContext } from 'react'
import Card from '../components/Card/Card'
import { AppContext } from '../App'

function Home() {
  const { searchValue, setSearchValue, items, isLoading } = useContext(AppContext)

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <div className='content p-40 '>
      <div className='d-flex justify-between align-center'>
        <h1>Все кроссовки</h1>

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
        {(isLoading ? [...Array(12)] : filteredItems).map((item) => (
          <Card
            id={item?.id}
            imageUrl={item?.imageUrl}
            title={item?.title}
            price={item?.price}
            key={item?.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
