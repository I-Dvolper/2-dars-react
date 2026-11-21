import "./App.css"
import Navbar from "./assets/components/Nav/Navbar"
import ProductCard from "./assets/components/Card/ProductCard"
import Button from "./assets/components/Button/Button"

const App = () => {
  return (
    <div className="sahifa">
      <Navbar nomi="My Store" tugma="Kirish" />

      <main className="asos">
        <div className="qator">
          <ProductCard rasm="📱" nomi="Phone" narx="$500" matn="Buy" />
          <ProductCard rasm="💻" nomi="Laptop" narx="$900" matn="Buy" />
          <ProductCard rasm="⌚" nomi="Watch" narx="$200" matn="Buy" />
        </div>

       
      </main>
    </div>
  )
}

export default App