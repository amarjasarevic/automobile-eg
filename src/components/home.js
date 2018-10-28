import React from 'react'
import { Link } from 'gatsby'
import './home.css'

const Home = () => (
  <div className="home__root">
    <div className="home__content">
      <h1>We buy your car</h1>
      <h1>
        <a href="tel:089-51299770" className="home__contact">
          089-51299770
        </a>
      </h1>
      <h1>
        <a href="mailto:automobile-eg@gmail.com" className="home__contact">
          automobile-eg@gmail.com
        </a>
      </h1>
      <h2>You can contact us any time!</h2>
      <h5>
        <Link to="/buy-form/" className="home__link">
          <div />
          <div />
          <span>or you prefer forms</span>
        </Link>
      </h5>
    </div>
  </div>
)

export default Home
