import Link from "next/link"

export default function Home () {
  return (
    <>
      <h1>Home page</h1>
     <Link href="/blog">Blog</Link>
     <h1><Link href="/products/1">Product detail 1</Link></h1>
     <h1><Link href="/products/2">Product detail 2</Link></h1>
     <h1><Link href="/products/3" replace>Product detail 3</Link></h1>
    </>
  )
}
