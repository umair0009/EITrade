import React from "react";
import { Link } from "react-router-dom";

import "./TypeOfCargo.scss";

const TypeOfCargo = () => {
  const colorCode = "#1686F6";

  return (
    <>
      <section id="TypeOfCargo">
        <div className="site_container">
          <div className="inner">
            <h2>Select Type of Cargo</h2>
            <div className="label_blk">
              <h5>Groupage</h5>
              <label class="containers">
                <input type="radio" name="gender" value="men" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div className="label_blk">
              <h5>Conteneur</h5>
              <label class="containers">
                <input type="radio" name="gender" value="men" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div className="bottom">
          <Link
            to=""
            // to={routes.form.question1}
            type="button"
            className="back_btn"
            style={{
              backgroundColor: "transparent",
              border: `.1rem solid ${colorCode}`,
              color: colorCode,
            }}
          >
            <i class="fa-solid fa-arrow-left" style={{ color: colorCode }}></i>
            Back
          </Link>
          <Link
            // to={routes.form.question3}
            to="/import/carton-details"
            type="button"
            className="next_btn"
            style={{ backgroundColor: colorCode }}
          >
            Next
            <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </>
  );
};

export default TypeOfCargo;