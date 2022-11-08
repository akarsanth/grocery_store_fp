import React from "react";

import Banner from "../components/layout/Banner";
import BreadCrumb from "../components/BreadCrumb";

const FAQ = () => {
  return (
    <>
      <BreadCrumb page="FAQ'S" />
      <Banner>
        <div className="faq">
          <h3>FAQ's</h3>
          <div
            className="panel-group w3l_panel_group_faq"
            id="accordion"
            role="tablist"
            aria-multiselectable="true"
          >
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingOne">
                <h4 className="panel-title asd">
                  <a
                    className="pa_italic"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <span
                      className="glyphicon glyphicon-plus"
                      aria-hidden="true"
                    ></span>
                    <i className="glyphicon glyphicon-minus" aria-hidden="true"></i>
                    assumenda est cliche reprehenderit
                  </a>
                </h4>
              </div>
              <div
                id="collapseOne"
                className="panel-collapse collapse in"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div className="panel-body panel_text">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur.
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingTwo">
                <h4 className="panel-title asd">
                  <a
                    className="pa_italic collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <span
                      className="glyphicon glyphicon-plus"
                      aria-hidden="true"
                    ></span>
                    <i className="glyphicon glyphicon-minus" aria-hidden="true"></i>
                    Itaque earum rerum
                  </a>
                </h4>
              </div>
              <div
                id="collapseTwo"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div className="panel-body panel_text">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur.
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingThree">
                <h4 className="panel-title asd">
                  <a
                    className="pa_italic collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <span
                      className="glyphicon glyphicon-plus"
                      aria-hidden="true"
                    ></span>
                    <i className="glyphicon glyphicon-minus" aria-hidden="true"></i>
                    autem accusamus terry quibusdam
                  </a>
                </h4>
              </div>
              <div
                id="collapseThree"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <div className="panel-body panel_text">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur.
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingFour">
                <h4 className="panel-title asd">
                  <a
                    className="pa_italic collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <span
                      className="glyphicon glyphicon-plus"
                      aria-hidden="true"
                    ></span>
                    <i className="glyphicon glyphicon-minus" aria-hidden="true"></i>
                    excepturi sint cliche reprehenderit
                  </a>
                </h4>
              </div>
              <div
                id="collapseFour"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingFour"
              >
                <div className="panel-body panel_text">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur.
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingFive">
                <h4 className="panel-title asd">
                  <a
                    className="pa_italic collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    <span
                      className="glyphicon glyphicon-plus"
                      aria-hidden="true"
                    ></span>
                    <i className="glyphicon glyphicon-minus" aria-hidden="true"></i>
                    dolorem eum fugiat quo voluptas nulla pariatur
                  </a>
                </h4>
              </div>
              <div
                id="collapseFive"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingFive"
              >
                <div className="panel-body panel_text">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur.
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingSix">
                <h4 className="panel-title asd">
                  <a
                    className="pa_italic collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    <span
                      className="glyphicon glyphicon-plus"
                      aria-hidden="true"
                    ></span>
                    <i className="glyphicon glyphicon-minus" aria-hidden="true"></i>
                    terry eiusmod high life accusamus
                  </a>
                </h4>
              </div>
              <div
                id="collapseSix"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingSix"
              >
                <div className="panel-body panel_text">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur.
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingSeven">
                <h4 className="panel-title asd">
                  <a
                    className="pa_italic collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    <span
                      className="glyphicon glyphicon-plus"
                      aria-hidden="true"
                    ></span>
                    <i className="glyphicon glyphicon-minus" aria-hidden="true"></i>
                    quasi architecto beatae vitae dicta
                  </a>
                </h4>
              </div>
              <div
                id="collapseSeven"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingSeven"
              >
                <div className="panel-body panel_text">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur.
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingEight">
                <h4 className="panel-title asd">
                  <a
                    className="pa_italic collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                  >
                    <span
                      className="glyphicon glyphicon-plus"
                      aria-hidden="true"
                    ></span>
                    <i className="glyphicon glyphicon-minus" aria-hidden="true"></i>
                    iure reprehenderit qui in ea voluptate velit esse
                  </a>
                </h4>
              </div>
              <div
                id="collapseEight"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingEight"
              >
                <div className="panel-body panel_text">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur.
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingNine">
                <h4 className="panel-title asd">
                  <a
                    className="pa_italic collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseNine"
                    aria-expanded="false"
                    aria-controls="collapseNine"
                  >
                    <span
                      className="glyphicon glyphicon-plus"
                      aria-hidden="true"
                    ></span>
                    <i className="glyphicon glyphicon-minus" aria-hidden="true"></i>
                    reprehenderit qui in ea voluptate velit esse quam nihil
                  </a>
                </h4>
              </div>
              <div
                id="collapseNine"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingNine"
              >
                <div className="panel-body panel_text">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Banner>
    </>
  );
};

export default FAQ;
