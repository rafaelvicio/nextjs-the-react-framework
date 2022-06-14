import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function PageSSR({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <Image src={item.image} alt={item.title} width={500} height={500} />
          <p>{item.title}</p>
          <p>{item.description}</p>
          <Link href={`/blog/post/${item.id}`}>
            <button>View</button>
          </Link>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps(context) {
  const API_URL = process.env.API_URL

  const response = await fetch(`${API_URL}/posts`)
  const data = await response.json()

  return {
    props: {
      data,
    },
  }
}

export default PageSSR
