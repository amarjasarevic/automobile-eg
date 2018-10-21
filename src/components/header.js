import React from 'react'
import { Link } from 'gatsby'
import './header.css'

const NavItem = ({ label, href }) => (
  <h4 className="nav-item__header">
    <Link to={href} className="nav-item__link">
      { label }
    </Link>
  </h4>
)

const navItems = [
  {
    label: 'Home',
    href: '/',
  }, {
    label: 'About',
    href: '/#about',
  }, {
    label: 'Contact',
    href: '/#contact',
  }, {
    label: 'Buy form',
    href: '/buy-form',
  },
]

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
    }
  }

  handleMenuClick = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }

  render() {
    let navClass = 'header__nav';
    if (this.state.isMenuOpen) {
      navClass += ' header__nav--visible';
    }

    return (
      <div className="header__root">
        <div className="header__content">
          <h1 className="header__title">
            <Link to="/" className="header__link">
              { this.props.siteTitle }
            </Link>
          </h1>
          <nav className={navClass} onClick={this.handleMenuClick}>
            {navItems.map(({ label, href }) => <NavItem key={label} label={label} href={href} />)}
          </nav>
          <div className="header__menu" onClick={this.handleMenuClick}>
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    )
  }
}

export default Header
