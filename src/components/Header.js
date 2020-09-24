import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <header>
      <div className="container">
        <nav aria-label="navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
