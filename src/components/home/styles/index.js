import styled from 'react-emotion'

export const Header = styled('div')`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 400px;
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
  min-height: 400px;
`

export const Content = styled('div')`
  position: relative;

  h1,
  h2 {
    line-height: 1em;
    margin-top: 20px;
    color: white;
  }

  h1 {
    font-size: 3rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  h2 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 0;
    margin-bottom: 0;

    a {
      color: white;
      margin-right: 35px;
      position: relative;
      font-size: 1.1rem;

      &:hover {
        color: #fab700;
      }

      &:nth-child(2) {
        &:before {
          content: '';
          width: 5px;
          height: 5px;
          background: white;
          border-radius: 50%;
          position: absolute;
          left: -20px;
          top: 12px;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    flex: 0 0 56%;
  }

  @media (min-width: 960px) and (max-width: 1199px) {
    flex: 0 0 66%;
  }

  @media (max-width: 959px) {
    flex: 0 0 100%;
    
    h1 {
      font-size: 1.7rem;
    }

    h2 {
      flex-direction: column;
      align-items: start;

      a {
        margin-right: 0;

        &:nth-child(2) {
          &:before {
            content: none;
          }
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
  margin-top: 1.45rem;

  a {
    color: #fff;
    font-weight: bold;
    padding: 12px 40px;
  }
`

export const InvisibleCTA = styled('div')`
  height: 44px;
  margin-top: 1.45rem;
`
