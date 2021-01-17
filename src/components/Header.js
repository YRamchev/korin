import React from "react"
import Navigation from "./Navigation"
import { Link } from "gatsby"
import "./Header.css"

export default () => (
  <header className="header">
    <div className="container container--max-width header__container">
      <Link to="/" className="header__logo">
        Yordan Ramchev
      </Link>

      <Navigation />
    </div>
  </header>
)
