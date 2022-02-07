import Link from "next/link";
import Layout from "../components/Layout";
import Head from "next/head";


const Index = () => (
  <Layout
    mainTitle="My Home page"
    footer={`Copyright ${new Date().getFullYear()}`}
  >
    <Head>
      <title>Yara's page</title>
    </Head>

    <h2>Hello from Next js</h2>

    <Link href="/about">
      <a>About page</a>
    </Link>
  </Layout>
);

export default Index;
