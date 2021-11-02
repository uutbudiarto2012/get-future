import { useEffect, useState } from "react";
import {useRouter} from 'next/router';
import Auth from "./auth";
import Menu from "./menu";
import ToggleMenu from "./ToggleMenu";
function Navbar() {
  const router = useRouter()
  const pathRoute = router.asPath.slice(1).split('/')[0];
  const [scrollPosition, setPosition] = useState(0);
  const [showMenuMobile, setShowMenuMobile] = useState(false)
  
  const toggleMenu=()=>{
    showMenuMobile ? setShowMenuMobile(false) : setShowMenuMobile(true);
  }
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
            <div className="_logo_wrapper">
              <div className="logoImg">
                <img className="logo" src="/assets/logo/logo.svg" alt="" />
              </div>
              <div className="logoText">Get Future</div>
            </div>
            <div className="_menu_wrapper d-none d-md-flex">
              <ul className="menus">
                <Menu title="Home" active={!pathRoute} />
                <Menu title="Pekerjaan" href="/projects" active={pathRoute ==='projects'} />
                <Menu title="Layanan" href="/service" active={pathRoute ==='service'} />
                <Menu title="Kontak" href="/contact" active={pathRoute ==='contact'} />
                <Menu title="Tentang" href="/about" active={pathRoute ==='about'} />
                <Menu title="Blog" href="/blog" active={pathRoute ==='blog'} />
              </ul>
            </div>
            <div className="_auth_wrapper d-none d-md-flex">
              <Auth isLoggedIn={false} />
            </div>
            <ToggleMenu onClick={toggleMenu} />
          </div>
        </div>
        <div className={`menu-mobile ${showMenuMobile && 'show'}`}>
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
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Layanan</a>
              </li>
              <li>
                <a href="#">Kontak</a>
              </li>
              <li>
                <a href="#">Tentang</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer">
            <div className="btn-auth">
              <a href="">Register</a>
            </div>
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
