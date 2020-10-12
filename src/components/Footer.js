import React from "react"
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons"

export default () => (
  <footer className="footer">
    <div className="container container--max-width">
      <h3 className="footer__find">Find me on</h3>
      <div className="footer__social">
        <a
          href="https://www.linkedin.com/in/yordanramchev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://stackoverflow.com/users/6809789/yordan-ramchev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faStackOverflow} />
        </a>
        <a
          href="https://github.com/YRamchev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100000578126301"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
      <div className="footer__copyright">MIT License</div>
      <div className="footer__copyright">
        Copyright © {new Date().getFullYear()} Yordan Ramchev
      </div>
    </div>
  </footer>
)
