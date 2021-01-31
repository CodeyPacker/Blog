import { useRouter } from "next/router"
import styles from './Post.module.scss'

function Post({ date, image, title, index }) {
  const router = useRouter();
  let { file, description } = image;

  return (
    <div className={styles.post}>
      <img className={styles.postImage} alt={description} src={`https:${file.url}`} />
      <div className={styles.postDetails}>
        <h2>{title}</h2>
        <h3>{date.substring(0, 10)}</h3>
        <p className="description">{description}</p>
        <span onClick={() => router.push(`/post/${index}`)}>Read me...</span>
      </div>
    </div>
  );
}

export default Post;
