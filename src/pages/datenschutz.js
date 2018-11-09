import React from 'react'
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
          Willkommen bei <a href="/">Automobile EG</a>.
        </p>
        <p>
          Wie Sie bereits gesehen haben, ist die Nutzung unserer Website ohne Angabe personenbezogener Daten absolut möglich.
          <br />
          Das <a href="/contact-form">Kontaktformular</a> ist der einzige Ort, an dem Sie OPTIONAL Ihre persönlichen Daten eingeben können.
          Trotzdem gibt es keinen Grund zur Sorge, da wir Ihre Daten nicht speichern.
          Wir leiten sie nur per E-Mail an unsere im Rahmen der <a href="/impressum">Impressum</a>-Seite angegebene E-Mail-Adresse weiter.
        </p>
        <p>
          Viel Spaß beim Stöbern durch unsere Website. :)
        </p>
      </div>
    </Section>
  </Layout>
)

export default Datenschutz
