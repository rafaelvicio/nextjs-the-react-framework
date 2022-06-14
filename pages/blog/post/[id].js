import React from 'react'
import Image from 'next/image'

function Post({ data }) {
  return (
    <div>
      <div>
        <Image src={data.image} alt={data.title} width={500} height={500} />
        <p>{data.title}</p>
        <p>{data.description}</p>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params

  const API_URL = process.env.API_URL

  const response = await fetch(`${API_URL}/post?id=${id}`)
  const data = await response.json()

  return {
    props: {
      data,
    },
  }
}

export default Post
