import Post from "@components/Post";
import { useRouter } from "next/router"
import { fetchEntries } from "@utils/contentfulPosts";

export default function singlePost({posts}) {
  const router = useRouter();
  const { id } = router.query;
  const currentPost = posts[`${id}`];

  return (
    <div>
      <Post
        key={currentPost.date}
        date={currentPost.date}
        image={currentPost.image.fields}
        title={currentPost.title}
      />
    </div>
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