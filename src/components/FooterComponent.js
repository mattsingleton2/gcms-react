import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core";
import "bootstrap-social";

function Footer(props) {
  return (
    <>
      <footer class="mastfoot mt-auto">
        <div class="container">
          <div class="row row-content justify-content-center">
            <div class="col-6 col-sm-5 text-center">
              <p>Social - Coming Soon</p>
              <a
                class="btn btn-social-icon btn-instagram"
                href="http://instagram.com/"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                class="btn btn-social-icon btn-facebook"
                href="http://facebook.com/"
              >
                <i className="fa-brands fa-facebook" />
              </a>
              <a
                class="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                class="btn btn-social-icon btn-youtube"
                href="http://youtube.com/"
              >
                <i class="fab fa-youtube"></i>
              </a>
              <a
                class="btn btn-social-icon btn-discord"
                href="http://discord.com/"
              >
                <i class="fab fa-discord"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
