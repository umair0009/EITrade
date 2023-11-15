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
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>
                {/* <img src={product} alt="product" /> */}
              </div>
              <p className="product_img">
                Image of Product
              </p>
            </a>
            <a>
            <div onClick={()=>{
                getImportType('HC')
            }} className="img_blk">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path  d="M24 32C10.7 32 0 42.7 0 56V456c0 13.3 10.7 24 24 24H40c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H24zm88 0c-8.8 0-16 7.2-16 16V464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16zm72 0c-13.3 0-24 10.7-24 24V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H184zm96 0c-13.3 0-24 10.7-24 24V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H280zM448 56V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H472c-13.3 0-24 10.7-24 24zm-64-8V464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16s-16 7.2-16 16z"/></svg>
                {/* <img src={hscode} alt="product" /> */}
              </div>
              <p className="product_img">
              HS Code
              </p>

            </a>
            <a>
            <div onClick={()=>{
                getImportType('DES')
            }}  className="img_blk">
              <i class="fa-light fa-subtitles"></i>
                {/* <img src={description} alt="product" /> */}
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
