import styled from 'react-emotion'

// styles
export const HeaderStyle = styled('div')`
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

export const HeaderContent = styled('div')`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  justify-content: space-between;
  align-items: center;
`

export const HeaderLogo = styled('nav')`
  font-size: 1.2rem;
  a {
    color: white;
    text-decoration: none;
    &:hover {
      font-weight: bold;
    }
  }
  @media (max-width: 449px) {
    a > span:last-child {
      display: none;
    }
  }
  @media (min-width: 450px) {
    a > span:first-child {
      display: none;
    }
  }
`

export const Nav = styled('nav')`
  touch-action: pan-y;
  display: flex;
  justify-items: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const NavItemStyle = styled('div')`
  margin-right: 15px;
  &:last-child {
    margin-right: 0;
  }
  a {
    color: white;
    text-decoration: none;
    &:hover {
      font-weight: bold;
    }
  }
  @media (max-width: 339px) {
    &:first-child {
      display: none;
    }
  }
`
