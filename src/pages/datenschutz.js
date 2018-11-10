import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Home from '../components/home/home'
import { Section } from '../components/section/section'
import './datenschutz.css'

const Datenschutz = () => (
  <Layout>
    <Home />
    <Section title="Datenschutz">
      <div className="datenschutz__content">
        <p>
          Willkommen bei <Link to="/">Automobile EG</Link>.
        </p>
        <p>
          Wie Sie bereits gesehen haben, ist die Nutzung unserer Website ohne Angabe personenbezogener Daten absolut möglich.
          <br />
          Das <Link to="/kontaktformular">Kontaktformular</Link> ist der einzige Ort, an dem Sie OPTIONAL Ihre persönlichen Daten eingeben können.
          Trotzdem gibt es keinen Grund zur Sorge, da wir Ihre Daten nicht speichern.
          Wir leiten sie nur per E-Mail an unsere im Rahmen der <Link to="/impressum">Impressum</Link>-Seite angegebene E-Mail-Adresse weiter.
        </p>
        <p>
          Viel Spaß beim Stöbern durch unsere Website. :)
        </p>
      </div>
    </Section>
  </Layout>
)

export default Datenschutz
