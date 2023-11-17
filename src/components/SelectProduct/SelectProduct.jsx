import React,{useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import uploadimage from "../../assets/images/uploadimage.png";
import { uploadImage } from "../../Redux/user/Operations";
import "./SelectProduct.scss";

              
const SelectProduct = ({data,onDataUpload}) => {
  const colorCode = "#1686F6";
  const dispatch = useDispatch()
  const accessToken = useSelector(state=>state.user.accessToken)
  const [file, setFile] = useState(undefined);



  const uploadData = (value) => {
  


    dispatch(uploadImage(accessToken, value)).then((data) => {
      if (data) {
        console.log(data);
      }
    }).catch(err => {
      console.log(err);
    })
    
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
                <input onChange={(event => {
                  let obj = {
                    name: event.target.files[0].name,
                    type:event.target.files[0].type
                  }
                  console.log(obj);
                  setFile(event.target.files[0])
                  uploadData(event.target.files[0])
                })} type="file" name="myfile" />
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
            <button
                onClick={uploadData}

              type="button"
              className="next_btn"
              style={{ backgroundColor: colorCode }}
            >
              Next
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SelectProduct;
