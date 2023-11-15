import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./ShippingDetails.scss";

const ShippingDetails = ({onSubmit}) => {
  const colorCode = "#1686F6";

  const [quantity,setQuantity] = useState(1)
  const [unitPrice,setUnitPrice] = useState(1)
  const [shippingCost,setShippingCost] = useState(1)


  const onHandleClick = () =>{

    let  obj={
      quantity:quantity,
      unitPrice:unitPrice,
      shippingCost:shippingCost,
      result:unitPrice*shippingCost,
    }
      onSubmit(obj)
  }

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
                 <input type="number" placeholder="e.g 22" />
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
            <button
              onClick={onHandleClick}
              type="button"
              className="next_btn"
              style={{ backgroundColor: colorCode }}
            >
              Next
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
      </section>
    </>
  );
};

export default ShippingDetails;
