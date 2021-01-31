import Head from "next/head";
import { fetchEntries } from "@utils/contentfulPosts";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Post from "@components/Post";
import styles from '@components/Post.module.scss';

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Next + Contentful Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;1,300&display=swap" rel="stylesheet"/>
      </Head>

      <main>
        <Header title="Creative logo"/>
        <div className={styles.posts}>
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
