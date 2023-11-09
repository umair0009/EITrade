import React from 'react';
import "./ShippingResult.scss"
const ShippingResult = () => {
  return (
      <>
          <section id='ShippingResult'>
              <h2>Shipping Cost</h2>
              <div className='inner'>
                  <div className='side_by_side'> 
                      <span>Estimated Customs Clearance</span>
                      <b>$400.00</b>
                  </div>
                  <div className='side_by_side'> 
                      <span>Shipping Cost</span>
                      <b>$4500.00</b>
                  </div>
                  <div className='side_by_side'> 
                  <span>Each PCS Cost: </span>
                  <b>$40.00</b>
                  </div>
                  
                  <h5>Total Cost: <b>$4600.00</b></h5>
              <button type='button' className='pdf_btn'>Download PDF</button>
              </div>
      </section>
      </>
  )
}

export default ShippingResult