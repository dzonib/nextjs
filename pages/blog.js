import Link from 'next/link'

const PostLink = ({title}) => (
    <li>
        <Link href={`/post?title=${title}`}>
            <a>{title} post</a>
        </Link>
    </li>
)


export default () => (
    <>
        <h1>My blog posts</h1>
          <ul>
            <PostLink title="React"/>
            <PostLink title="Angular"/>
            <PostLink title="Wu"/>
        </ul>
    </>
)