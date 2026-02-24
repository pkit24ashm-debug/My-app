import { useEffect, useState } from 'react'

interface Post {
  id: number
  title: string
  body: string
  userId: number
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
        )

        if (!response.ok) {
          throw new Error('Failed to fetch posts')
        }

        const data: Post[] = await response.json()
        setPosts(data.slice(0, 10))
      } catch (err) {
        setError('Cannot load posts')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) return <p>Loading posts...</p>
  if (error) return <p>{error}</p>

  return (
    <>
      <h1>Blog Posts</h1>

      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: '20px' }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  )
}