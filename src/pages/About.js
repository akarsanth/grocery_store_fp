import React from "react";

import Banner from "../components/layout/Banner";
import BreadCrumb from "../components/BreadCrumb";

// Images
import image31 from "../images/31.jpg";
import image32 from "../images/32.jpg";
import image33 from "../images/33.jpg";
import image34 from "../images/34.jpg";
import image35 from "../images/35.jpg";

const About = () => {
  return (
    <>
      <BreadCrumb page="About Us" />
      <Banner>
        <div className="privacy about">
          <h3>About Us</h3>
          <p className="animi">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio.
          </p>
          <div className="agile_about_grids">
            <div className="col-md-6 agile_about_grid_right">
              <img src={image31} alt=" " className="img-responsive" />
            </div>
            <div className="col-md-6 agile_about_grid_left">
              <ol>
                <li>laborum et dolorum fuga</li>
                <li>corrupti quos dolores et quas</li>
                <li>est et expedita distinctio</li>
                <li>deleniti atque corrupti quos</li>
                <li>excepturi sint occaecati cupiditate</li>
                <li>accusamus et iusto odio</li>
              </ol>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </Banner>

      {/* Team */}
      <div className="team">
        <div className="container">
          <h3>Meet Our Amazing Team</h3>
          <div className="agileits_team_grids">
            <div className="col-md-3 agileits_team_grid">
              <img src={image32} alt=" " className="img-responsive" />
              <h4>Martin Paul</h4>
              <p>Manager</p>
              <ul className="agileits_social_icons agileits_social_icons_team">
                <li>
                  <a href="#" className="facebook">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="google">
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 agileits_team_grid">
              <img src={image33} alt=" " className="img-responsive" />
              <h4>Michael Rick</h4>
              <p>Supervisor</p>
              <ul className="agileits_social_icons agileits_social_icons_team">
                <li>
                  <a href="#" className="facebook">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="google">
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 agileits_team_grid">
              <img src={image34} alt=" " className="img-responsive" />
              <h4>Thomas Carl</h4>
              <p>Supervisor</p>
              <ul className="agileits_social_icons agileits_social_icons_team">
                <li>
                  <a href="#" className="facebook">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="google">
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 agileits_team_grid">
              <img src={image35} alt=" " className="img-responsive" />
              <h4>Laura Lee</h4>
              <p>CEO</p>
              <ul className="agileits_social_icons agileits_social_icons_team">
                <li>
                  <a href="#" className="facebook">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="google">
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials">
        <div className="container">
          <h3>Testimonials</h3>
          <div className="w3_testimonials_grids">
            <div
              className="wmuSlider example1 animated wow slideInUp"
              data-wow-delay=".5s"
            >
              <div className="wmuSliderWrapper">
                <article
                // style={{ position: "absolute", width: "100%", opacity: 0 }}
                >
                  <div className="banner-wrap">
                    <div className="col-md-6 w3_testimonials_grid">
                      <p>
                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                        Itaque earum rerum hic tenetur a sapiente delectus, ut
                        aut reiciendis voluptatibus maiores alias consequatur
                        aut perferendis doloribus asperiores repellat.
                      </p>
                      <h4>
                        Andrew Smith <span>Customer</span>
                      </h4>
                    </div>
                    <div className="col-md-6 w3_testimonials_grid">
                      <p>
                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                        Itaque earum rerum hic tenetur a sapiente delectus, ut
                        aut reiciendis voluptatibus maiores alias consequatur
                        aut perferendis doloribus asperiores repellat.
                      </p>
                      <h4>
                        Thomson Richard <span>Customer</span>
                      </h4>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                </article>
                <article
                  style={{ position: "absolute", width: "100%", opacity: 0 }}
                >
                  <div className="banner-wrap">
                    <div className="col-md-6 w3_testimonials_grid">
                      <p>
                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                        Itaque earum rerum hic tenetur a sapiente delectus, ut
                        aut reiciendis voluptatibus maiores alias consequatur
                        aut perferendis doloribus asperiores repellat.
                      </p>
                      <h4>
                        Crisp Kale <span>Customer</span>
                      </h4>
                    </div>
                    <div className="col-md-6 w3_testimonials_grid">
                      <p>
                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                        Itaque earum rerum hic tenetur a sapiente delectus, ut
                        aut reiciendis voluptatibus maiores alias consequatur
                        aut perferendis doloribus asperiores repellat.
                      </p>
                      <h4>
                        John Paul <span>Customer</span>
                      </h4>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                </article>
                <article
                  style={{ position: "absolute", width: "100%", opacity: 0 }}
                >
                  <div className="banner-wrap">
                    <div className="col-md-6 w3_testimonials_grid">
                      <p>
                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                        Itaque earum rerum hic tenetur a sapiente delectus, ut
                        aut reiciendis voluptatibus maiores alias consequatur
                        aut perferendis doloribus asperiores repellat.
                      </p>
                      <h4>
                        Rosy Carl <span>Customer</span>
                      </h4>
                    </div>
                    <div className="col-md-6 w3_testimonials_grid">
                      <p>
                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                        Itaque earum rerum hic tenetur a sapiente delectus, ut
                        aut reiciendis voluptatibus maiores alias consequatur
                        aut perferendis doloribus asperiores repellat.
                      </p>
                      <h4>
                        Rockson Doe <span>Customer</span>
                      </h4>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
