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
        <h2 className={styles.postTitle}>{title}</h2>
        <span className={styles.postDate}>{date.substring(0, 10)}</span>
        <p>{content[0]}...</p>
        <span className={styles.postLink} role="button" onClick={() => router.push(`/post/${index}`)}>View post...</span>
      </div>
    </div>
  );
}

export default Post;
