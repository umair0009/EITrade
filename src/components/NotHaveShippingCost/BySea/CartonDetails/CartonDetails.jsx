import React from "react";
import { Link } from "react-router-dom";
import "./CartonDetails.scss";
const CartonDetails = () => {
  const colorCode = "#1686F6";

  return (
    <>
      <section id="CartonDetails">
        <div className="site_container">
          <div className="inner">
            <h2>Enter Carton Details</h2>
            <div className="row">
              <div className="col-md-6">
                <label>Number of Cartons</label>

                <div className="input_blk">
                  <input type="number" placeholder="Enter Number of Cartons" />
                  {/* <select className="select_blk" placeholder="select Quantity">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select> */}
                </div>
              </div>

              <div className="col-md-6">
                <label>Weight of Carton (KG)</label>
                <div className="input_blk">
                  <input
                    type="text"
                    placeholder="Enter weight of carton in KG"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <label htmlFor="">Size of Carton (cm)</label>
                <div className="carton_size">
                  <div className="input_blk size_blk">
                    <label>Height (cm)</label>
                    <input type="number" placeholder="e.g 300cm" />
                  </div>
                  <div className="input_blk size_blk">
                    <label>Width (cm)</label>
                    <input type="number" placeholder="e.g 300cm" />
                  </div>
                  <div className="input_blk size_blk">
                    <label>Length (cm)</label>
                    <input type="number" placeholder="e.g 300cm" />
                  </div>
                </div>
              </div>
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

export default CartonDetails;
