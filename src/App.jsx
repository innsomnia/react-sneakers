import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { SlideCart } from './components/SlideCart/SlideCart'
import './index.scss'
import { Home } from './pages/Home'
import { Favorites } from './pages/Favorites'

export const AppContext = createContext({})

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [openSlide, setOpenSlide] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const fetchItems = async () => {
      const response = await axios.get('https://6684021e56e7503d1adf042b.mockapi.io/items')
      setItems(response.data)
      setIsLoading(false)

      const localItems = JSON.parse(localStorage.getItem('cartItems') || '[]')
      setCartItems(localItems)

      const localFavorites = JSON.parse(localStorage.getItem('favoritesItems') || '[]')
      setFavorites(localFavorites)
    }

    fetchItems()
  }, [])

  const deleteItemCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id)

    setCartItems(updatedCartItems)
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
  }

  return (
    <AppContext.Provider
      value={{
        items,
        setItems,
        cartItems,
        setCartItems,
        favorites,
        setFavorites,
        openSlide,
        setOpenSlide,
        searchValue,
        setSearchValue,
        deleteItemCart,
        isLoading,
        setIsLoading,
      }}>
      <div className='wrapper clear'>
        {openSlide ? <SlideCart closeCart={() => setOpenSlide(false)} /> : null}

        <Header openCart={() => setOpenSlide(true)} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </div>
    </AppContext.Provider>
  )
}

export default App
