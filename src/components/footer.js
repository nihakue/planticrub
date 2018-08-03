import React from 'react'

import contact from '../data/contact.json'

import './footer.css'

function ContactDetail({ field, value }) {
  switch (field) {
    case 'email':
      return (
        <a href={`mailto:${value}`} target="_top">
          {value}
        </a>
      )
    case 'phone':
      return (
        <a href={`tel:${value}`} target="_top">
          {value}
        </a>
      )
    default:
      return <span>{value}</span>
  }
}

function ContactDetails() {
  return (
    <ul className="contact">
      {Object.keys(contact).map(key => (
        <li key={key}>
          <ContactDetail field={key} value={contact[key]} />
        </li>
      ))}
    </ul>
  )
}

function Copyright() {
  return <div className="copyright">© 2018 Planticrub</div>
}

export default function Footer() {
  return (
    <div className="footer">
      <ContactDetails />
      <Copyright />
    </div>
  )
}
