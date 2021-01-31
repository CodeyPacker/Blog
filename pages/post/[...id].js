import { useRouter } from "next/router"
import { fetchEntries } from "@utils/contentfulPosts";
import styles from "@components/Post.module.scss";

export default function singlePost({posts}) {
  const router = useRouter();
  const { id } = router.query;
  const currentPost = posts[`${id}`];
  // Get the paragraphs from the Rich Text Content
  // TODO: use the rich-text-to-react package, which makes getting all content types easy
  const content = currentPost.article.content.map((n) => n.nodeType === 'paragraph' && n.content[0].value)

  return (
    <>
      <section className={styles.hero}>
        <img className={styles.heroImg}  alt={currentPost.description} src={`https:${currentPost.image.fields.file.url}`} />
      </section>
      <section className="constraint">
        <h2>{currentPost.title}</h2>
        <span>{currentPost.date.substring(0, 10)}</span>
        {content.map(txt => <p>{txt}</p>)}
      </section>
    </>
  )
}

export async function getServerSideProps() {
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