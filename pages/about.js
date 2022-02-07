import Link from "next/link";
import Layout from "../components/Layout";


//It is better to put these separatly
const myStyle = {
  color: "red",
  borderLeft: "5px solid black",
  padding: "5px",
};

const About = () => (
  <Layout>
    <h2>About page</h2>
    <Link href="/">
      <a style={myStyle}>Home page</a>
    </Link>

    <p>Hello everyone! I am Yara.</p>

    <style jsx>{`
      p {
        color: indigo;
        font-size: 20px;
      }
    `}</style>
  </Layout>
);

export default About;
