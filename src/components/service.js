import React from 'react'
import Img from 'gatsby-image'

import './service.css'

export default function Service({ title, description, image }) {
  return (
    <section className="service">
      <Img alt={title} fixed={image} />
      <div className="body">
        <h2>{title}</h2> <p>{description}</p>
      </div>
    </section>
  )
}
