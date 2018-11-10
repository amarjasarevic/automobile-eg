import React from 'react'
import { Link } from 'gatsby'
import { FooterStyles } from './styles'

const Footer = () => (
  <FooterStyles>
    <div className="container">
      <div>
        © 2018 Automobile EG München. Alle Rechte vorbehalten. &middot;
        <Link to="/impressum"> Impressum</Link> &middot;
        <Link to="/datenschutz"> Datenschutz</Link>
      </div>
    </div>
  </FooterStyles>
)

export default Footer
