import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react'

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60,
            
        }
    })

    return response.json()
}


export default async function Blog() {
    const posts = await getData()
  return (
    <div>
        <h1>Blog</h1>
        <ul>
            {posts.map((post: any) => 
                (<li key={post.id}>
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </li>)
            )}
        </ul>
    </div>
  )
}
export const metadata: Metadata = {
  title: "Blog",
};