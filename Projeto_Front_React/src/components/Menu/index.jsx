import './Menu.scss'

const Menu = props => {
  return (
    <div className="header-menu">
      <nav className="menu">
        <a href="/">Register</a>
        <a href="/">History</a>
        <a href="/">Characters</a>
        <a href="/">About</a>
      </nav>
      <div className="options">
        <a href="/">Dark Mode</a>
        <a href="/">Language</a>
        <a href="/">Options</a>
      </div>
    </div>
  )
}

export default Menu
