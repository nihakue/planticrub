import React from 'react'
import Layout from '../components/layout'

export default function ContactPage() {
  return (
    <Layout>
      <form name="contact" netlify>
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Comment: <input type="textarea" name="comment" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}
