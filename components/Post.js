import { useRouter } from 'next/router'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'

function Post({ date, image, title, index, article}) {
  const router = useRouter();
  let { file, description } = image;
  const content = article.content.map((n) => n.nodeType === 'paragraph' && n.content[0].value).map(p => p.substring(0, 50))
  const linkPath = `/post/${index}`;
  return (
    <div className="post">
      <img className="image" alt={description} src={`https:${file.url}`} />
      <div className="details">
        <h2 className="title">{title}</h2>
        <span className="date">{date.substring(0, 10)}</span>
        <p>{content[0]}...</p>
        <Link className="link" href={linkPath}>View post</Link>
        {/* <span className="link" role="button" onClick={() => router.push(`/post/${index}`)}>View post...</span> */}
      </div>
      <style jsx>{`
        .post {
          margin-bottom: 30px;
          box-shadow: -2px -2px 8px 0px #fff,
          2px 2px 8px 0px #a3b1c6;
          border-radius: 4px;
        }

        .image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 4px 4px 0 0;
        }

        .title { margin-bottom: 0; }

        .date {
          font-size: 12px;
          font-style: italic;
          font-weight: 300;
        }

        .details {
          padding: 0 15px 15px 15px;
          transform: translateY(-3px);
        }

        .link {
          cursor: pointer;
          display: inline-block;
          border-bottom: 1px solid #A0A0A0;
          padding-bottom: 3px;
        }

        @media only screen and (min-width: 768px) {
            .post {
              width: calc(50% - 15px);
              display: inline-block;
            }

            .post:nth-of-type(odd) { margin-right: 15px; }
            .post:nth-of-type(even) { margin-left: 15px; }
          }
      `}
      </style>
    </div>
  );
}

export default Post;
