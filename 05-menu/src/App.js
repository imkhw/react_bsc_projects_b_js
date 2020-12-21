import MenusList from './MenusList'
import CategoriesList from './CategoriesList'

import data from './data'

import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; 

const categories = ['all', ...new Set(data.map((data) => {
  return data.category
}))]

function App() {
  const [categoryItems, setCategoryItems] = useState(categories)
  const [menuItems, setMenuItems] = useState(data)
  const filteredByCategory = (categoryItem) => {
    if (categoryItem === 'all') {
      setMenuItems(menuItems)
      return
    }
    const newMenuItems = data.filter((menuItem) => {
      return menuItem.category === categoryItem
    })
    setMenuItems(newMenuItems)
  }
  return (
    <div className="App">
      Our Restaurants
      <CategoriesList categoryItems={categoryItems} filteredByCategory={filteredByCategory}/>
      <MenusList menuItems={menuItems} />
    </div>
  );
}

export default App;
