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

class NavItem extends React.Component {
  handleClick = (event) => {
    const { onNavigate, componentName } = this.props

    if (componentName) {
      event.preventDefault()
      event.stopPropagation()

      localStorage.setItem('sectionToNavigate', componentName)

      onNavigate(componentName)
    }
  }

  render() {
    const { href, label } = this.props

    return (
      <NavItemStyle>
        <Link to={href} className="nav-item__link" onClick={this.handleClick}>
          {label}
        </Link>
      </NavItemStyle>
    )
  }
}

const navItems = [
  {
    label: 'Startseite',
    href: '/',
    componentName: 'home',
  },
  {
    label: 'Über uns',
    href: '/',
    componentName: 'about',
  },
  {
    label: 'Anfahrt',
    href: '/',
    componentName: 'location',
  },
  {
    label: 'Kontaktformular',
    href: '/kontaktformular',
  },
]

class Header extends React.Component {
  render() {
    const { onNavigate, showScrollUp } = this.props

    return (
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
              {navItems.map(({ label, href, componentName }) => (
                <NavItem key={label} label={label} href={href} componentName={componentName} onNavigate={onNavigate} />
              ))}
            </Nav>
          </HeaderContent>
        </div>
      </HeaderStyle>
    )
  }
}

export default withScrollWatch(Header)
