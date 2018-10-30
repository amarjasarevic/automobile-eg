import styled from 'react-emotion'

export const Header = styled('div')`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const OverlayBg = styled('div')`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
`
export const HeaderContent = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: ${props => (props.height ? props.height : '60vh')};
`
export const Content = styled('div')`
  text-align: justify;
  position: relative;
  flex: 0 0 56%;

  h1,
  h2 {
    line-height: 1em;
    margin-top: 20px;
    color: white;
    text-transform: uppercase;
  }

  h1 {
    font-size: 3rem;
    font-weight: 600;
  }

  h2 {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    a {
      color: white;
      margin-right: 30px;
      position: relative;
      font-size: 0.9rem;

      &:first-child {
        &:after {
          content: '';
          width: 5px;
          height: 5px;
          background: white;
          border-radius: 50%;
          position: absolute;
          right: -20px;
          top: 10px;
        }
      }
    }
  }
`

export const HeaderLink = styled('a')`
  display: block;
  margin-bottom: 20px;
`

export const CallToAction = styled('div')`
  background-color: #fab700;
  line-height: 42px;
  padding-left: 40px;
  padding-right: 40px;
  border: none;
  display: inline-block;
  font-weight: 500;
  position: relative;
  border: 1px solid transparent;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  text-transform: uppercase;
  position: relative;

  a {
    color: #fff;
    font-weight: bold;
  }
`
