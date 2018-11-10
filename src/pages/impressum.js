import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Home from '../components/home/home'
import { Section } from '../components/section/section'
import './impressum.css'

const Impressum = () => (
  <Layout>
    <Home />
    <Section title="Impressum">
      <h3>Kontakt</h3>
      <div className="impressum__content">
        <div>
          <p>Automobile EG</p>
          <p>Bodenseestraße 129</p>
          <p>81243 München</p>
        </div>
        <div>
          <p><b>Geschäftsführer:</b> Elvir Grozdanic</p>
          <p><b>Telefon:</b> <a href="tel:+49 172 8 666 828">+49 172 8 666 828</a></p>
          <p><b>E-Mail:</b> <a href="mailto:automobile.grozdanic@gmail.com">automobile.grozdanic@gmail.com</a></p>
        </div>
      </div>
      <div className="impressum__datenschutz">
        <p>Interessiert am <Link to="/datenschutz">Datenschutz</Link>? Klick <Link to="/datenschutz">hier</Link>.</p>
      </div>
    </Section>
  </Layout>
)

export default Impressum
