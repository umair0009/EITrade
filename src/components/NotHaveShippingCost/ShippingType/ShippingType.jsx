import React, {useState} from "react";
import { Link } from "react-router-dom";

import bysea from "../../../assets/images/bysea.png";
import byair from "../../../assets/images/byair.jpg";

import "./ShippingType.scss";
const ShippingType = ({onSelection}) => {
  const colorCode = "#1686F6";
  const [shippingType, setShippingType] = useState("")

  return (
    <>
      <section id="ShippingType">
        <h2>Type of Shipping</h2>
        <div className="inner1">
          <div className="card_blk">
            <div onClick={()=>{
              onSelection("BY_AIR")
              setShippingType("BY_AIR")
            }} className="card">
              <div className="checkbox">
                <h5>By Air</h5>
                <label class="containers">
                  <input checked={shippingType==='BY_AIR'} type="radio" name="gender" value="men" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="card_body">
                <div className="img_blk">
                  <img src={byair} color={colorCode} />
                </div>
              </div>
            </div>
            {/*<Link to="/import/by-sea/cargo-type">*/}
              <div onClick={()=>{
                onSelection("BY_SEA")
                setShippingType("BY_SEA")
              }} className="card">
                <div  className="checkbox">
                  <h5>By Sea</h5>
                  <label class="containers">
                    <input checked={shippingType==='BY_AIR'} type="radio" name="gender" value="women" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div className="card_body">
                  <div className="img_blk">
                    <img src={bysea} color={colorCode} />
                  </div>
                </div>
              </div>
            {/*</Link>*/}
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
            to="/import/packing-type"
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

export default ShippingType;
