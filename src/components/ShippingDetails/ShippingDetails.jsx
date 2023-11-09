import React from "react";
import { Link } from "react-router-dom";
import "./ShippingDetails.scss";

const ShippingDetails = () => {
  const colorCode = "#1686F6";

  return (
    <>
      <section id="ShippingDetails">
        <h2>Shipping Details</h2>
        <div className="inner">
          <form>
            <h4>Enter Product Details</h4>
            <div className="row">
             
              <div className="col-md-6">
                <label>Quantity</label>

                <div className="input_blk">
                  <select className="select_blk" placeholder="select Quantity">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                          </div>
                          <div className="col-md-6">
                              
                          </div>
              
              <div className="col-md-6">
                <label>Unit value of PCS</label>
                <div className="input_blk">
                  <input type="text" placeholder="Enter Unit value of PCS" />
                </div>
              </div>
              <div className="col-md-6">
                <label>Shipping Cost</label>
                <div className="input_blk">
                  <input type="text" placeholder="Enter Shipping Cost" />
                </div>
              </div>
            </div>
          </form>
         
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
            <Link
              to="/import/result"
            //   href="#"
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

export default ShippingDetails;
