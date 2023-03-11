import { getPostsBySlug, getPostsData } from '@/lib/posts'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { useRouter } from 'next/router'

function Posts(props:{
  posts: any
}) {
  const { slug } = useRouter().query
  return (
    <div>{JSON.stringify(props['posts'])}</div>
  )
}

export async function getStaticPaths() {
  const slugs = (await getPostsData()).posts.map((data) => {
    return data['slug']
  })
  return {
    paths: slugs.map((data) => {
      return {
        params: {
          slug: data
        }
      }
    }),
    fallback: false
  }
}

export async function getStaticProps(context: Params) {
  const { slug } = context.params
  const posts = await getPostsBySlug(slug)
  return {
    props: { posts }
  }
}

export default Posts

