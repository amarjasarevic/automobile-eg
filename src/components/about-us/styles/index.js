import styled from 'react-emotion'

export const AboutUsItems = styled('div')`
  display: flex;
  justify-content: space-around;
  
  @media (min-width: 900px) {
    padding-top: 60px;
  }
  
  @media (max-width: 899px) {
    flex-direction: column;
  }
`

export const ItemBlock = styled('div')`
  @media (min-width: 900px) {
    display: inline-block;
    width: 33%;
  }
  
  @media (min-width: 550px) and (max-width: 899px) {
    display: inline-flex;
    align-items: center;
    padding-bottom: 30px;
    width: 100%;
    
    &:nth-child(even) {
      > div:first-child {
        order: 2;
      }
    }
  }
  
  @media (max-width: 549px) {
    &:nth-child(even) {
      padding-top: 60px;
    }
  }
`

export const ImageHolder = styled('div')`
  border-radius: 50%;
  box-shadow: 0px 0px 20px 2px #04091e;
  margin: 0 auto;
  text-align: center;
  height: 200px;
  width: 200px;
  
  @media (min-width: 550px) and (max-width: 899px) {
    display: inline-block;
    vertical-align: middle;
  }
`

export const ItemContent = styled('div')`
  margin: 0 auto;
  padding: 35px;
  text-align: center;
  
  @media (min-width: 900px) {
    width: 100%;
  }
  
  @media (min-width: 550px) and (max-width: 899px) {
    display: inline-block;
    vertical-align: middle;
    width: calc(100% - 220px);
  }
`
