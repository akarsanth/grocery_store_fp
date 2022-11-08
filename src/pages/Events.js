import React from "react";

import Banner from "../components/layout/Banner";
import BreadCrumb from "../components/BreadCrumb";

// Images
import image15 from "../images/15.png";
import image19 from "../images/19.png";

const Events = () => {
  return (
    <>
      <BreadCrumb page="Events" />
      <Banner>
        <div className="events">
          <h3>Events</h3>
          <div className="w3agile_event_grids">
            <div className="col-md-6 w3agile_event_grid">
              <div className="col-md-3 w3agile_event_grid_left">
                <i className="fa fa-bullhorn" aria-hidden="true"></i>
              </div>
              <div className="col-md-9 w3agile_event_grid_right">
                <h4>cum soluta nobis eligendi</h4>
                <p>
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus.
                </p>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="col-md-6 w3agile_event_grid">
              <div className="col-md-3 w3agile_event_grid_left">
                <i className="fa fa-bullseye" aria-hidden="true"></i>
              </div>
              <div className="col-md-9 w3agile_event_grid_right">
                <h4>rerum hic tenetur a sapiente</h4>
                <p>
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus.
                </p>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="w3agile_event_grids">
            <div className="col-md-6 w3agile_event_grid">
              <div className="col-md-3 w3agile_event_grid_left">
                <i className="fa fa-credit-card" aria-hidden="true"></i>
              </div>
              <div className="col-md-9 w3agile_event_grid_right">
                <h4>earum rerum tenetur sapiente</h4>
                <p>
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus.
                </p>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="col-md-6 w3agile_event_grid">
              <div className="col-md-3 w3agile_event_grid_left">
                <i className="fa fa-eye" aria-hidden="true"></i>
              </div>
              <div className="col-md-9 w3agile_event_grid_right">
                <h4>quibu aut officiis debitis</h4>
                <p>
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus.
                </p>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="w3agile_event_grids">
            <div className="col-md-6 w3agile_event_grid">
              <div className="col-md-3 w3agile_event_grid_left">
                <i className="fa fa-cog" aria-hidden="true"></i>
              </div>
              <div className="col-md-9 w3agile_event_grid_right">
                <h4>necessitatibus saepe eveniet</h4>
                <p>
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus.
                </p>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="col-md-6 w3agile_event_grid">
              <div className="col-md-3 w3agile_event_grid_left">
                <i className="fa fa-trophy" aria-hidden="true"></i>
              </div>
              <div className="col-md-9 w3agile_event_grid_right">
                <h4>repudiandae sint et molestiae</h4>
                <p>
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus.
                </p>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="events-bottom">
            <div className="col-md-6 events_bottom_left">
              <div className="col-md-4 events_bottom_left1">
                <div className="events_bottom_left1_grid">
                  <h4>20</h4>
                  <p>July, 2016</p>
                </div>
              </div>
              <div className="col-md-8 events_bottom_left2">
                <img src={image15} alt=" " className="img-responsive" />
                <h4>ut aut reiciendis facere possimus</h4>
                <ul>
                  <li>
                    <i className="fa fa-clock-o" aria-hidden="true"></i>3:00 PM
                  </li>
                  <li>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <a href="#">Admin</a>
                  </li>
                </ul>
                <p>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est.
                </p>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="col-md-6 events_bottom_left">
              <div className="col-md-4 events_bottom_left1">
                <div className="events_bottom_left1_grid">
                  <h4>21</h4>
                  <p>July, 2016</p>
                </div>
              </div>
              <div className="col-md-8 events_bottom_left2">
                <img src={image19} alt=" " className="img-responsive" />
                <h4>maxime placeat facere possimus</h4>
                <ul>
                  <li>
                    <i className="fa fa-clock-o" aria-hidden="true"></i>3:30 PM
                  </li>
                  <li>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <a href="#">Admin</a>
                  </li>
                </ul>
                <p>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est.
                </p>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </Banner>
    </>
  );
};

export default Events;
