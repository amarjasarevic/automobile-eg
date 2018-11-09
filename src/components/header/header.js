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
    label: 'Startseite',
    href: '/',
  },
  {
    label: 'Über uns',
    href: '/#about',
  },
  {
    label: 'Anfahrt',
    href: '/#location',
  },
  {
    label: 'Kontaktformular',
    href: '/contact-form',
  },
]

const Header = ({ showScrollUp }) => (
  <HeaderStyle id="header" showBg={showScrollUp}>
    <div className="container">
      <HeaderContent>
        <HeaderLogo>
          <Link to="/">
            <span>Automobile</span>
            <img src={logo} alt="EG" width={40} />
          </Link>
        </HeaderLogo>

        <Nav>
          {navItems.map(({ label, href }) => (
            <NavItem key={label} label={label} href={href} />
          ))}
        </Nav>
      </HeaderContent>
    </div>
  </HeaderStyle>
)

export default withScrollWatch(Header)
