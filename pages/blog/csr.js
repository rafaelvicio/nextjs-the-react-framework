import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

function PageSSG() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No posts data</p>

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

export default PageSSG
