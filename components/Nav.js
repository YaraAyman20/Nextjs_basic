import Link from "next/link";
import Image from 'next/image'
import pic from '../public/graphic.jpg'


const Nav = () => (
  <div className="my-nav">
    <img src="/graphic.jpg" height="50px"/>
 

    <Link href="/">
      <a>Home </a>
    </Link>
    <Link href="/about">
      <a>About </a>
    </Link>
    <Link href="/news">
      <a>News  </a>
    </Link>

    <style jsx>{`

      a,
      img {
        padding: 10px;
      }
    `}</style>
  </div>
);

export default Nav;
