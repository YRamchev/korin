import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "normalize.css"
import "./Layout.css"

export default ({ children }) => (
  <div className="page-wrapper">
    <Header />
    {children}
    <Footer />
  </div>
)
