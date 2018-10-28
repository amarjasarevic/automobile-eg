import styled from 'react-emotion'

// styles
const HeaderStyle = styled('div')`
  padding: 14px 0px 14px 0;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  transition: all 0.5s;
  z-index: 10;
  background-color: ${props => (props.showBg ? 'rgba(0, 0, 0, 0.8)' : null)};
  transition: ${props => (props.showBg ? 'transition: all 0.5s' : null)};
`

const HeaderContent = styled('div')`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  justify-content: space-between;
  align-items: center;
`

const HeaderLogo = styled('nav')`
  font-size: 1.2rem;
  a {
    color: white;
    text-decoration: none;
  }
`

const Nav = styled('nav')`
  touch-action: pan-y;
  display: flex;
  justify-items: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

const NavItemStyle = styled('div')`
  margin-right: 10px;
  a {
    color: white;
    text-decoration: none;
  }
`

export const { HeaderStyle, HeaderContent, HeaderLogo, Nav, NavItemStyle}
