import { useRouter } from "next/router"
import styles from './Post.module.scss'

function Post({ date, image, title, index, article}) {
  const router = useRouter();
  let { file, description } = image;
  const content = article.content.map((n) => n.nodeType === 'paragraph' && n.content[0].value).map(p => p.substring(0, 50))

  return (
    <div className={styles.post}>
      <img className={styles.postImage} alt={description} src={`https:${file.url}`} />
      <div className={styles.postDetails}>
        <h2>{title}</h2>
        <h3>{date.substring(0, 10)}</h3>
        <p className="description">{content[0]}...</p>
        <span onClick={() => router.push(`/post/${index}`)}>View post...</span>
      </div>
    </div>
  );
}

export default Post;
