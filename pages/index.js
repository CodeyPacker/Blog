import Head from "next/head";
import { fetchEntries } from "@utils/contentfulPosts";
import _JSXStyle from "styled-jsx/style";

import Footer from "@components/Footer";
import Post from "@components/Post";

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Next + Contentful Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;1,300&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <div className="posts">
          {posts.map((p, i) => {
            return (
              <Post
                key={p.date}
                date={p.date}
                image={p.image.fields}
                title={p.title}
                article={p.article}
                index={i}
              />
            );
          })}
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .posts {
          padding: 30px 15px;
          max-width: 1200px;
          margin-right: auto;
          margin-left: auto;
          padding-left: 15px;
          padding-right: 15px;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetchEntries();
  const posts = await res.map((p) => {
    return p.fields;
  });

  return {
    props: {
      posts,
    },
  };
}
