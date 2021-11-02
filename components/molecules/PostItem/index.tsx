import Link from 'next/link'
interface PostItemProps {
  title: string;
  exerpt: string;
  slug: string;
  thumbnail: string;
}
export default function PostItem(props: PostItemProps) {
  const { title, exerpt, slug, thumbnail } = props;
  return (
    <div className="col-lg-4 col-xl-3 col-6">
      <div data-aos="fade-up" className="blog-item">
        <Link href={`/blog/${slug}`}>
        <a className="image-wrapper">
          <img src={thumbnail} alt="" />
        </a>
        </Link>
        <div className="desc">
          <h3 className="title">
            {title}
          </h3>
          <span>
            {exerpt}
          </span>
          <a href="#/" className="view-demo d-block">
            Selengkapnya <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
