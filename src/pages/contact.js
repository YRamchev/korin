import React, { useState, useMemo } from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

export default () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const contact = useMemo(() => {
    return {
      name: name,
      email: email,
      message: message,
    }
  }, [name, email, message])

  const handleSubmit = e => {
    console.log(contact)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", contact }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  return (
    <>
      <Helmet title="Contact - Yordan Ramchev" defer={false} />

      <Layout>
        <section className="container container--max-width-sm">
          <h1>Contact me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            tristique dolor nec quam condimentum rutrum. Sed mattis mattis
            euismod. Praesent iaculis purus eu magna hendrerit, a faucibus justo
            elementum. Proin sed eros nec est maximus iaculis. Proin pharetra
            justo eu convallis gravida. Mauris vestibulum lacinia mi eu blandit.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label>
                <div className="field__label">Your name</div>
                <input
                  type="text"
                  placeholder="Your name"
                  value={email}
                  onChange={e => setName(e.target.value)}
                />
              </label>
            </div>
            <div className="field">
              <label>
                <div className="field__label">Your E-mail</div>
                <input
                  type="text"
                  placeholder="Your E-mail"
                  value={name}
                  onChange={e => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div className="field">
              <label>
                <div className="field__label">Message</div>
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                >
                  Message...
                </textarea>
              </label>
            </div>
            <button type="submit" className="btn btn--primary mt-24">
              Submit
            </button>
          </form>
        </section>
      </Layout>
    </>
  )
}

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
