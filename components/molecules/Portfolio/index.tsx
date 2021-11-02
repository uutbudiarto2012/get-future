import Link from "next/link";
export default function Portfolio() {
  return (
    <div className="col-lg-4 col-xl-3 col-6">
      <div data-aos="fade-up" className="product-item">
        <Link href="/projects/slug-bro">
          <a className="image-wrapper">
            <img
              className="img-product"
              src="/assets/images/products/1.png"
              alt=""
            />
          </a>
        </Link>
        <div className="desc">
          <h3 className="title">PT Solidaritas Para Programmer</h3>
          <span>Company Profile dan system administrasi</span>
          <a href="https://www.google.com/search?q=kapan+indonesia+merdeka&sxsrf=AOaemvLZC3WzX7c_SH5P3Ebbt0L3tLYopg%3A1635871108067&source=hp&ei=hGmBYcIkiIfIA_TmldgH&iflsig=ALs-wAMAAAAAYYF3lGntSnkID-GYLFCr6UwPUBkf9jO1&oq=kapan+indonesia+merdeka&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEIAEELEDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIIxDqAhAnOgQIIxAnOgsIABCABBCxAxCDAToGCCMQJxATOhEILhCABBCxAxCDARDHARDRAzoICC4QgAQQsQM6DgguEIAEELEDEMcBENEDOggIABCxAxCDAToFCAAQywFQkSxY7G5g5HNoBHAAeAGAAbMCiAGKGpIBCDUuMjAuMC4xmAEAoAEBsAEK&sclient=gws-wiz&ved=0ahUKEwjC9qnijvrzAhWIA3IKHXRzBXsQ4dUDCAY&uact=5" target="_blank" rel="noreferrer noopener" className="view-demo d-block">
            View Demo <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
