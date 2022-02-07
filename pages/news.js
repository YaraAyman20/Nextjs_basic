import Link from "next/link";
import Layout from "../components/Layout";
import Head from "next/head";
import Error from "./_error";

const News = ({news}) => {
    return(
        <Layout mainTitle="news">
            <div>
                <h2>List of News</h2>
                <hr />
                {JSON.stringify(news)}
            </div>
        </Layout>
    )
}

News.getInitialProps = async () => {
    let news;
    try{
        const res = await fetch("https://hn.algolia.com/api/v1/search?query=react");
        news = await res.json();
    }
    catch(err){
        news = [];
        console.log("no")
    }
    return{
        news
    };
};

export default News;