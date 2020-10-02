import React from "react"
import { Link } from "gatsby"
import "./Navigation.css"

export default () => (
  <nav className="nav" aria-label="navigation">
    <ul className="nav__list">
      <li className="nav__item">
        <Link to="/" className="nav__link" activeClassName="nav__link--active">
          Home
        </Link>
      </li>
      <li className="nav__item">
        <Link
          to="/about"
          className="nav__link"
          activeClassName="nav__link--active"
        >
          About
        </Link>
      </li>
      <li className="nav__item">
        <Link
          to="/experience"
          className="nav__link"
          activeClassName="nav__link--active"
        >
          Experience
        </Link>
      </li>
      <li className="nav__item">
        <Link
          to="/contact"
          className="nav__link"
          activeClassName="nav__link--active"
        >
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
