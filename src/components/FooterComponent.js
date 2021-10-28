import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer(props) {
  return (
    <>
      <div className="container mastfoot mt-auto">
        <div className="row row-content justify-content-center">
          <div className="col-6 col-sm-5 text-center">
            <p>Social - Coming Soon</p>
            <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com/"
            >
              <i className="fa fa-instagram" />
            </a>
            <a
              class="btn btn-social-icon btn-facebook"
              href="http://facebook.com/"
            >
              <i className="fa fa-facebook" />
            </a>
            <a
              className="btn btn-social-icon btn-twitter"
              href="http://twitter.com/"
            >
              <i className="fa fa-twitter" />
            </a>
            <a
              className="btn btn-social-icon btn-google"
              href="http://youtube.com/"
            >
              <i className="fa fa-youtube" />
            </a>
            <a
              class="btn btn-social-icon btn-discord"
              href="http://discord.com/"
            >
              <FontAwesomeIcon icon="fa-brands fa-discord" color="#FFF" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
