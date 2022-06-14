import React from 'react'
import Link from 'next/link'

function PageISR({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const API_URL = process.env.API_URL

  const response = await fetch(`${API_URL}/posts`)
  const data = await response.json()

  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}

export default PageISR
