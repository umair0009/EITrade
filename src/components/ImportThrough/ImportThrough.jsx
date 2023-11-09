import React from "react";
import { Link } from "react-router-dom";

import "./ImportThrough.scss";

const ImportThrough = () => {
  const colorCode = "#1686F6";

  return (
    <>
      I
      <section id="ImportThrough">
        <div className="site_container">
          <h4>Select Action Type</h4>
          <div className="inner">
            <Link to="/import/product-type">
              <button type="button" className="import_cost">
                Cost of Import
              </button>
            </Link>
            <button type="button" className="import_cost">
              Documents
            </button>
            <button type="button" className="import_cost">
              Libre Exchange
            </button>
            <button type="button" className="import_cost">
              HS Code
            </button>
            <button type="button" className="import_cost">
              Custom Clearance Tax
            </button>
          </div>
          <div className="bottom">
            <a
              href="#"
              // to={routes.form.question1}
              type="button"
              className="back_btn"
              style={{
                backgroundColor: "transparent",
                border: `.1rem solid ${colorCode}`,
                color: colorCode,
              }}
            >
              <i
                class="fa-solid fa-arrow-left"
                style={{ color: colorCode }}
              ></i>
              Back
            </a>
            <a
              // to={routes.form.question3}
              href="#"
              type="button"
              className="next_btn"
              style={{ backgroundColor: colorCode }}
            >
              Next
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImportThrough;
