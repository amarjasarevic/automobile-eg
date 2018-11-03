import styled from 'react-emotion'

export const AboutRow = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  
  @media (max-width: 649px) {
    flex-direction: column;
  }
`

export const FeatureItem = styled('div')`
  flex: 0 0 calc(33% - 30px);
  border-radius: 10px;
  background-color: #f9f9ff;
  padding: 30px;
  margin-bottom: 30px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;

  &:hover {
    box-shadow: -14.142px 14.142px 20px 0px rgba(157, 157, 157, 0.5);
  }
`

export const ItemTitle = styled('h2')`
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 1.2rem;
`

export const ItemContent = styled('p')`
  font-size: 0.9rem;
  margin-bottom: 0;
`
