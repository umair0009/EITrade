import React from 'react'
import { Link } from 'react-router-dom';
import "./HaveShippingCost.scss";

const HaveShippingCost = () => {
  const colorCode = "#1686F6";

  return (
      <>
          <section id='HaveShippingCost'>
              <h2>Select Choice</h2>
              <div className='inner'>
                  <label className='mb-2'>Do You Have Shipping cost</label>
          <div className='btn_blk'>
            <button type='button' className='have_cost'>Yes</button>
            <button type='button' className='have_cost'>No</button>
            
                 </div>
             
              </div>
              <div className="bottom">
            <Link
            //   href="#"
            //   to="/import/shipping-details"
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
            </Link>
                  <Link
              to="/import/shipping-details"
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
  )
}

export default HaveShippingCost