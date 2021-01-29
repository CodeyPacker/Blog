import { useRouter } from "next/router"

function Post({ date, image, title, index }) {
  const router = useRouter();
  let { file, description } = image;

  return (
    <div className="post">
      <img alt={description} src={`https:${file.url}`} />
      <p className="description">{description}</p>
      <h2>{title}</h2>
      <h3>{date.substring(0, 10)}</h3>
      <span onClick={() => router.push(`/post/${index}`)}>Read me...</span>
    </div>
  );
}

export default Post;
