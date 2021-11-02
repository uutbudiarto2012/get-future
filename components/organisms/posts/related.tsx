import Link from 'next/link'
interface RelatedPostProps{
  title : string,
  postedBy : string,
  slug : string
}
export default function RelatedPost(props:RelatedPostProps) {
  const {title,postedBy,slug} = props;
  return (
    <Link href={slug}>
      <a className="related-item">
        <h5>{title}</h5>
        <div className="info">
          <span>Published by {postedBy}</span>
        </div>
      </a>
    </Link>
  );
}
