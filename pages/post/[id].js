import { useRouter } from "next/router";
import { fetchEntries } from "@utils/contentfulPosts";
import _JSXStyle from "styled-jsx/style";

// TODO: Set up Context and store posts there, and use that data everywhere so I'm not
// doing multiple requests.

export default function singlePost({ posts }) {
  console.log(posts);
  const router = useRouter();
  const { id } = router.query;
  const currentPost = posts[`${id}`];

  if (router.isFallback) {
    return <div>Please wait...</div>;
  }
  // TODO: use the rich-text-to-react package, which makes getting all content types easy.
  // This is limited to paragraphs
  const content = currentPost.article.content.map(
    (n) => n.nodeType === "paragraph" && n.content[0].value
  );

  return (
    <>
      <section className="hero">
        <img
          className="image"
          alt={currentPost.description}
          src={`https:${currentPost.image.fields.file.url}`}
        />
      </section>
      <section className="constraint">
        <h2>{currentPost.title}</h2>
        <span>{currentPost.date.substring(0, 10)}</span>
        {content.map((txt, i) => (
          <p key={i}>{txt}</p>
        ))}
      </section>
      <style jsx>{`
        .hero {
          max-width: 1200px;
          margin-right: auto;
          margin-left: auto;
        }

        .image {
          max-height: 300px;
          width: 100%;
        }
      `}</style>
    </>
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

export const getStaticPaths = async () => {
  const res = await fetchEntries();
  const posts = await res.map((p) => {
    return p.fields;
  });

  // TODO: loop over posts and use the index for the id
  const paths = [
    { params: { id: "0" } },
    { params: { id: "1" } },
    { params: { id: "2" } },
  ];

  return {
    paths,
    fallback: true,
  };
};
