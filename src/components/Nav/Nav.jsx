import React from "react";
import "./css/nav.css";
import "./css/bootstrap.min.css";

function Nav() {
  return (
    <div className="nav">
      <div class="site-mobile-menu site-navbar-target ">
        <div class="site-mobile-menu-header">
          <div class="site-mobile-menu-close mt-3">
            <span class="icon-close2 js-menu-toggle "></span>
          </div>
        </div>
        <div class="site-mobile-menu-body"></div>
      </div>

      <header class="site-navbar site-navbar-target py-4" role="banner">
        <div class="container">
          <div class="row align-items-center position-relative">
            <div class="col-3">
              <div class="site-logo">
                <a href="#" class="font-weight-bold text-black">
                  Brand
                </a>
              </div>
            </div>

            <div class="col-9  text-right">
              <span class="d-inline-block d-lg-block">
                <a
                  href="#"
                  class="text-dark site-menu-toggle js-menu-toggle py-5"
                >
                  <span class="icon-menu h3 text-orange"></span>
                </a>
              </span>

              <nav
                class="site-navigation text-right ml-auto d-none d-lg-none"
                role="navigation"
              >
                <ul class="site-menu main-menu js-clone-nav ml-auto ">
                  <li class="active">
                    <a href="/" class="nav-link">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/" class="nav-link">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" class="nav-link">
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="/awards" class="nav-link">
                      Awards
                    </a>
                  </li>
                  <li>
                    <a href="/contact" class="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        

        
      </header>
    </div>
  );
}

export default Nav;
