import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Auth from "./auth";
import Menu from "./menu";
import ToggleMenu from "./ToggleMenu";
function Navbar() {
  const router = useRouter();
  const pathRoute = router.asPath.slice(1).split("/")[0];
  const [scrollPosition, setPosition] = useState(0);
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  const toggleMenu = () => {
    showMenuMobile ? setShowMenuMobile(false) : setShowMenuMobile(true);
  };
  useEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <section
      id="mainNav"
      className={`_main_nav ${scrollPosition > 65 && "navBg"}`}
    >
      <div className="_navbar_wrapper">
        <div className="container-lg">
          <div className="_top_menu">
            <Link href="/">
              <div className="_logo_wrapper" style={{ cursor: "pointer" }}>
                <div className="logoImg">
                  {/* <img className="logo" src="/assets/logo/logo.svg" alt="" /> */}
                </div>
                <div className="logoText">Sintaks <span>Gadang</span></div>
              </div>
            </Link>
            <div className="_menu_wrapper d-none d-md-flex">
              <ul className="menus">
                <Menu title="Home" active={!pathRoute} />
                <Menu
                  title="Pekerjaan"
                  href="/projects"
                  active={pathRoute === "projects"}
                />
                <Menu
                  title="Layanan"
                  href="/service"
                  active={pathRoute === "service"}
                />
                <Menu
                  title="Kontak"
                  href="/contact"
                  active={pathRoute === "contact"}
                />
                <Menu
                  title="Tentang"
                  href="/about"
                  active={pathRoute === "about"}
                />
                <Menu title="Blog" href="/blog" active={pathRoute === "blog"} />
              </ul>
            </div>
            <div className="_auth_wrapper d-none d-md-flex">
              <Auth isLoggedIn={false} />
            </div>
            <ToggleMenu onClick={toggleMenu} />
          </div>
        </div>
        <div className={`menu-mobile ${showMenuMobile && "show"}`}>
          <div className="header">
            <div className="logoText">
              <a href="#">Get Future</a>
            </div>
            <div className="closeMenu" onClick={toggleMenu}>
              <img
                className="iconClose"
                src="/assets/images/ic_close.svg"
                alt=""
              />
            </div>
          </div>
          <div className="body">
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a>Portfolio</a>
                </Link>
              </li>
              <li>
                <Link href="/service">
                  <a>Layanan</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Kontak</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>Tentang</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer">
            <div className="btn-auth mb-5"></div>
            <div className="copyright">
              © Copyright 2022-2025 Get Future. All Rights Reserve
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
