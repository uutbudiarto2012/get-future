import { Footer, Navbar, Partwork, Popchat, RelatedPost } from "../../components/organisms";
import { useRouter } from 'next/router'
export default function Detail() {
  const router = useRouter()
  return (
    <>
    <Navbar />
    <section className="_detail_blog" id="detailblog">
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-6">
           <div className="title-wrapper">
            <a className="link-light text-decoration-none" style={{ cursor:'pointer' }} onClick={()=>router.back()}>
              <i className="bi bi-chevron-left"></i> Kembali
            </a>
            <h1 className="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, nesciunt?</h1>
            <span className="text d-block text-muted">Publish at 20-12-2024</span>
            <span className="text d-block text-muted">Published by Widiayanto</span>
           </div>
          </div>
          <div className="col-lg-6">
            <div className="featured">
              <img className="img-fluid" src="/assets/images/products/3.png" alt="" />
            </div>
          </div>
          <div className="col-lg-9">
            <div className="content-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad a quam quas veritatis blanditiis eius enim neque quis nemo accusantium.
              </p>
              <p>
                <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, omnis.</b>
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, recusandae dolores. Libero alias quod in delectus iste, quia mollitia reiciendis dolores sit? Et, maxime repudiandae sunt eum ex optio quia ipsa at impedit quo dignissimos a saepe cupiditate eius in obcaecati deleniti sed nam, alias deserunt aut voluptatem molestias dolores? Sit mollitia ipsam aliquam impedit quasi praesentium quaerat ad quod aliquid deserunt eveniet, provident numquam ea nemo dignissimos sint cum repellendus, saepe rerum rem nostrum labore ipsa laudantium porro. Accusamus neque ipsam suscipit reprehenderit minus totam omnis aperiam cumque soluta, ratione expedita laboriosam, doloremque dolorem ut nulla quis nihil eligendi repudiandae? Similique modi sunt asperiores blanditiis nulla! Dignissimos maxime tempora hic nemo autem doloremque? Tempora perferendis sunt distinctio est ducimus deserunt molestiae facilis dolor fugiat dolore veritatis ut ex pariatur ullam quae provident eius quidem iure, dicta nesciunt omnis corrupti? Molestias corporis ullam eum fuga sunt, praesentium perspiciatis? Consequuntur voluptatem nesciunt corporis ex et cupiditate vitae? Quod delectus, corrupti nulla quaerat tempore omnis enim facilis? Recusandae quos debitis quo. Alias porro, eos veniam rem modi suscipit culpa hic facilis voluptate non earum quasi eaque odit quae dignissimos recusandae labore molestiae repellendus! Atque deserunt incidunt suscipit quasi nesciunt delectus vel quis!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium fugiat perspiciatis similique error neque atque libero architecto saepe dignissimos soluta tenetur at obcaecati suscipit quaerat tempore magni fugit quis qui, recusandae itaque excepturi adipisci quia, quidem ullam. Unde eum neque excepturi libero tempore sapiente fuga explicabo reiciendis consectetur impedit earum eaque harum error illo, dolorum sequi laborum sed architecto inventore aperiam! Deserunt voluptatum recusandae suscipit molestiae sit dolorem delectus, ullam repudiandae quasi nisi corporis illo. Repudiandae quod officiis sint culpa quae mollitia rerum dolores blanditiis recusandae sit laboriosam harum perspiciatis voluptatem praesentium, consequatur eligendi a omnis expedita iure beatae corporis laudantium fuga. Eveniet explicabo delectus corrupti sint pariatur. Nobis mollitia sed sunt at quos cupiditate consequuntur repellat praesentium ipsum deleniti consequatur repellendus, error odit eligendi corrupti dolorum, labore cum assumenda perferendis quam quia possimus? Quae, qui minima vel soluta ipsam nihil dolor. Saepe recusandae quo nam ex, quam ab maxime modi, odio corrupti ipsum illo eaque quasi doloribus similique, aspernatur amet odit! Libero repudiandae, laudantium fugit perspiciatis expedita ipsa fugiat. Ipsa consectetur atque perspiciatis natus ad, recusandae eaque magnam animi porro voluptatem laborum esse suscipit eos architecto placeat accusantium aliquam exercitationem obcaecati, quibusdam debitis similique sunt! Id, doloremque dolorem eveniet perferendis maiores voluptates officia vel aut molestias repudiandae quod recusandae nobis at laboriosam ullam debitis! Aliquam dignissimos sapiente id dolores vitae ratione tenetur aliquid deleniti consequuntur optio doloremque magni provident dolore molestias ullam dicta eaque, a ipsa aperiam. Vel officiis odit, nam quo quasi blanditiis earum non atque incidunt, dolore aliquam! Voluptatem iste saepe, minus error veritatis natus quam fugiat! Optio, quas quisquam? Quae excepturi quas animi nisi architecto pariatur exercitationem odio cupiditate ipsa. Incidunt quae excepturi aliquam error sequi. At velit earum dolore omnis deleniti tenetur a tempore enim provident, quod non optio expedita sit accusamus eius ex dignissimos!
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="related">
              <RelatedPost
              slug="ini-slug-blog-bro"
              title="provident, quod non optio expedita sit accusamus eius ex dignissimos!"
              postedBy="Iwan Wijaya"
               />
              <RelatedPost
              slug="ini-slug-blog-bro"
              title="provident, quod non optio expedita sit accusamus eius ex dignissimos!"
              postedBy="Heri Cahyo Wijaya"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Partwork />
    <Popchat />
    <Footer />
    </>
  )
}
