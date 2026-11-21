import Button from "../Button/Button"
import "./Navbar.css"

const Navbar = ({ nomi, tugma }) => {
  return (
    <nav className="tepa">
      <div className="nom">{nomi}</div>
      <div className="menyular">
        <a href="#" className="havola">Bosh sahifa</a>
        <a href="#" className="havola">Mahsulotlar</a>
        <a href="#" className="havola">Aloqa</a>
      </div>
      <Button matn={tugma} />
    </nav>
  )
}

export default Navbar