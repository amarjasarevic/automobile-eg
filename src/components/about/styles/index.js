import styled from 'react-emotion'

export const AboutRow = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`

export const FeatureItem = styled('div')`
  flex: 0 0 calc(33% - 30px);
  max-height: 200px;
  min-height: 200px;
  margin-right: 15px;
  border-radius: 10px;
    background-color: #f9f9ff;
    padding: 30px;
    margin-bottom: 30px;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
}
`

export const ItemTitle = styled('h2')`
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 1.2rem;
`

export const ItemContent = styled('p')`
  font-size: 0.9rem;
`
