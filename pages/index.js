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
