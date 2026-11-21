import "./Navbar.css"

const Navbar = ({ nomi }) => {
  return (
    <nav className="tepa">
      <div className="nom">{nomi}</div>
    </nav>
  )
}

export default Navbar