import React from "react";
import { Link } from "react-router-dom";
import uploadimage from "../../assets/images/uploadimage.png";
import "./SelectProduct.scss";
const SelectProduct = ({onDataUpload}) => {
  const colorCode = "#1686F6";

  const uploadData = () => {
    onDataUpload()
  }


  return (
    <>
      <section id="SelectProduct">
        <div className="site_container">
          <h4>Select product Image</h4>
          <div className="inner">
            <div className="upload_img">
              <img src={uploadimage} alt="" />

              <div class="upload-btn-wrapper">
                <button class="btn">Upload a file</button>
                <input type="file" name="myfile" />
              </div>

              <span className="file_name">No File uploaded</span>
            </div>

            <div className="select">
              <div className="input_blk">
                <label>Select Country of Import</label>
                <select className="select_blk" placeholder="Select Country">
                  <option>United States</option>
                  <option>New Zealand</option>
                  <option>Pakistan</option>
                </select>
              </div>
              <div className="input_blk">
                <label>Select local Currency</label>
                <select className="select_blk" placeholder="Select Country">
                  <option>Dollar</option>
                  <option>PKR</option>
                  <option>Euro</option>
                </select>
              </div>
            </div>
            {/* <button type="button" className="next_btns">
              Next
            </button> */}
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
              to="/import/shipping-cost"
            //   href="#"
              type="button"
              className="next_btn"
              style={{ backgroundColor: colorCode }}
            >
              Next
              <i class="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SelectProduct;
