import Link from "next/link";
import Layout from "../components/Layout";
import Head from "next/head";
import Error from "./_error";

const News = ({ news }) => {
  return (
    <Layout mainTitle="news">
      <div>
        <h2>List of News</h2>
        <hr />
        {news.map((n, i) => (
          <p key={i}>
            <a href={n.url} target="_blank">{n.title}</a>
          </p>
        ))}
      </div>
    </Layout>
  );
};

News.getInitialProps = async () => {
  let news;
  try {
    const res = await fetch("https://hn.algolia.com/api/v1/search?query=react");
    news = await res.json();
  } catch (err) {
    news = [];
    //console.log("error");
  }
  return {
    news: news.hits
  };
};

export default News;
