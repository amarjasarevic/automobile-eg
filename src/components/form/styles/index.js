import styled from 'react-emotion'

export const RadioGroupContent = styled('div')`
  margin-bottom: 20px;

  label {
    margin-left: 10px;
  }

  label:first-child {
    display: block;
    margin-left: 0;
  }

  input {
    margin-left: 30px;
  }

  @media (max-width: 349px) {
    input:nth-child(2) {
      margin-left: 0;
    }
  }
`

export const TextContent = styled('div')`
  margin-bottom: 30px;

  input,
  textarea {
    width: 100%;
  }
`
