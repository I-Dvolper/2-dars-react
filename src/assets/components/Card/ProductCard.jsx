import Button from "../Button/Button"
import "./ProductCard.css"

const ProductCard = ({ rasm, nomi, narx, matn }) => {
  return (
    <div className="karta">
      <div className="rasm">{rasm}</div>
      <h3 className="sarlavha">{nomi}</h3>
      <p className="narx">{narx}</p>
      <Button matn={matn} />
    </div>
  )
}

export default ProductCard  