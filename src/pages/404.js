import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div style={{ margin: '0 auto', maxWidth: 960, textAlign: 'center', height: 'calc(100vh - 98px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1>PAGE NOT FOUND</h1>
      <p>We're sorry, but the page you were looking for doesn't exist.</p>
      <Link to="/" style={{ backgroundColor: '#04091e', color: 'white', textDecoration: 'none', padding: 15, width: 250, borderRadius: 5, margin: '0 auto' }}>Go to homepage</Link>
    </div>
  </Layout>
)

export default NotFoundPage
