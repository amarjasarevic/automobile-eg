import styled from 'react-emotion'

export const AdvantagesContainer = styled('div')`
  @media (min-width: 520px) and (max-width: 899px) {
    padding-left: 2rem;
  }
`

export const AdvantagesItem = styled('div')`
  margin-bottom: 40px;
  display: inline-block;
  
  img {
    margin-bottom: 0;
    vertical-align: middle;
  }
  
  div {
    font-size: 1.3rem;
    margin: 0 0 0 20px;
    display: inline-block;
    vertical-align: middle;
    width: calc(100% - 88px);
  }
  
  @media (min-width: 900px) {
    width: 50%;
  }
  
  @media (max-width: 899px) {
    width: 100%;
  }
`
