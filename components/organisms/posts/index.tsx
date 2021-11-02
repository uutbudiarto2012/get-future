import {PostItem} from '../../molecules'
export default function Posts() {
  return (
    <section className="_blog" id="blog">
      <div
        className="_ill_header_section"
        data-bg="/assets/illustration/ill-product-header.png"
      >
        <h2 className="title">Blog & News</h2>
        <span className="text">Catatan, Tips & Trik, dan Berita</span>
      </div>
      <div className="container-lg">
        <div className="blog-wrapper">
          <div className="row">
            <PostItem
              title="Judul Blog, tips & trik atau berita broooooo"
              exerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              sapiente blanditiis ea alias debitis quibusdam placeat iure eveniet
              enim quidem laborum iusto ipsa dolor..."
              slug="slug-bro-ini-namanya"
              thumbnail="https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1305&q=80"
            />
            <PostItem
              title="Judul Blog, tips & trik atau berita broooooo"
              exerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              sapiente blanditiis ea alias debitis quibusdam placeat iure eveniet
              enim quidem laborum iusto ipsa dolor..."
              slug="slug-bro-ini-namanya"
              thumbnail="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1115&q=80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
