import React from "react"
import { Helmet } from "react-helmet"

export default () => {
  return (
    <>
      <Helmet title="Contact - Yordan Ramchev" defer={false} />

      <section className="section container container--max-width-sm">
        <h1>Contact me</h1>
        <p>
          If you have any questions or just want to chat - feel free to write me
          using the form below or check the <strong>Footer</strong> to add me :)
        </p>

        <form
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div className="field">
            <label>
              <div className="field__label">Your name</div>
              <input
                type="text"
                placeholder="Your name"
                name="name"
                id="name"
              />
            </label>
          </div>
          <div className="field">
            <label>
              <div className="field__label">Your E-mail</div>
              <input
                type="text"
                placeholder="Your E-mail"
                name="email"
                id="email"
              />
            </label>
          </div>
          <div className="field">
            <label>
              <div className="field__label">Message</div>
              <textarea
                name="message"
                placeholder="Your message here..."
                id="message"
                rows={6}
              />
            </label>
          </div>
          <button type="submit" className="btn btn--primary mt-24">
            Submit
          </button>
        </form>
      </section>
    </>
  )
}
