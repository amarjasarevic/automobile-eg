import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import './404.css'

const NotFoundPage = () => (
  <Layout>
    <div className="container not-found__container">
      <h1>SEITE NICHT GEFUNDEN</h1>
      <p>Es tut uns leid, aber die von Ihnen gesuchte Seite existiert nicht.</p>
      <Link to="/" className="not-found__cta">Zurück zur Startseite</Link>
    </div>
  </Layout>
)

export default NotFoundPage
