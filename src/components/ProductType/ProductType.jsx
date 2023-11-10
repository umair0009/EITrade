import React from "react";
import product from "../../assets/images/product.jpg"
import hscode from "../../assets/images/hscode.jpg"
import description from "../../assets/images/description.png"



import "./ProductType.scss";
import { Link } from "react-router-dom";

const ProductType = ({getImportType}) => {
  const colorCode = "#1686F6";

  return (
    <>
      <section id="ProductType">
        <div className="site_container">
        {/* <h2 style={{ color: colorCode }}>Q3</h2> */}

        <h4>Select Import Type</h4>
          <div className="inner">
            <a href="#">
              <div onClick={()=>{
                getImportType('IOP')
              }} className="img_blk">
                <img src={product} alt="product" />
              </div>
              <p className="product_img">
                Image of Product
              </p>
            </a>
            <a>
            <div onClick={()=>{
                getImportType('HC')
            }} className="img_blk">
                <img src={hscode} alt="product" />
              </div>
              <p className="product_img">
              HS Code
              </p>

            </a>
            <a>
            <div onClick={()=>{
                getImportType('DES')
            }}  className="img_blk">
                <img src={description} alt="product" />
              </div>
              <p className="product_img">
              Description of Product
              </p>

            </a>
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

export default ProductType;
