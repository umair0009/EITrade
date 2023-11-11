import React from "react";
import { Link } from "react-router-dom";

import "./TypeOfCargo.scss";

const TypeOfCargo = ({onSelection}) => {
  const colorCode = "#1686F6";

  return (
    <>
      <section id="TypeOfCargo">
        <div className="site_container">
          <div className="inner">
            <h2>Select Type of Cargo</h2>

            <div className="label_blk">
              <button onClick={()=>[
                onSelection("GROUPAGE")
              ]} type="button" className="packing_type">Groupage</button>
            <button onClick={()=>[
              onSelection("CONTENEUR")
            ]} type="button" className="packing_type">Conteneur</button>

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
