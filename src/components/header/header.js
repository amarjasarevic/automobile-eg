import React from 'react'
import { Link } from 'gatsby'
import withScrollWatch from '../scroll/ScrollObserver'
import {
  HeaderStyle,
  HeaderContent,
  HeaderLogo,
  Nav,
  NavItemStyle,
} from './styles'

import logo from './automobile-eg-logo.png'

const NavItem = ({ label, href }) => (
  <NavItemStyle>
    <Link to={href} className="nav-item__link">
      {label}
    </Link>
  </NavItemStyle>
)

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/#about',
  },
  {
    label: 'Contact',
    href: '/#contact',
  },
  {
    label: 'Buy form',
    href: '/buy-form',
  },
]

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isMenuOpen: false,
    }
  }

  handleMenuClick = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }

  render() {
    // if (this.state.isMenuOpen) {
    //   navClass += ' header__nav--visible'
    // }
    const { showScrollUp } = this.props

    return (
      <HeaderStyle id="header" showBg={showScrollUp}>
        <div className="container">
          <HeaderContent>
            <HeaderLogo>
              <Link to="/">
                {/* TODO: First span could be a logo? */}
                <span>Automobile</span>
                <img src={logo} alt="EG" width={40} />
              </Link>
            </HeaderLogo>

            <Nav onClick={this.handleMenuClick}>
              {navItems.map(({ label, href }) => (
                <NavItem key={label} label={label} href={href} />
              ))}
            </Nav>
          </HeaderContent>
        </div>
      </HeaderStyle>
      // <div className="header__root">
      //   <div className="header__content">
      //     <h1 className="header__title">
      //       <Link to="/" className="header__link">
      //         { this.props.siteTitle }
      //       </Link>
      //     </h1>
      //     <nav className={navClass} onClick={this.handleMenuClick}>
      //       {navItems.map(({ label, href }) => <NavItem key={label} label={label} href={href} />)}
      //     </nav>
      //     <div className="header__menu" onClick={this.handleMenuClick}>
      //       <div />
      //       <div />
      //       <div />
      //     </div>
      //   </div>
      // </div>
    )
  }
}

export default withScrollWatch(Header)
