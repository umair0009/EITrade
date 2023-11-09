import React, {useState} from "react";
import {Link} from "react-router-dom";

import import1 from "../../assets/images/import1.jpg";
import export1 from "../../assets/images/export1.jpg";


import "./home.scss";

const Home = ({onSelect}) => {

    const [isImport, setImport] = useState("3")

    const colorCode = '#1686F6';






    return (
        <>
            <section id="home">
                <div className="site_container">
                    <div className="inner1">
                        <span>What Action would you like?</span>


                        <div className="card_blk">
                            <div className="card">
                                <div className="checkbox">
                                    <h5>Import</h5>
                                    <label onClick={() => {
                                        onSelect(true)
                                        setImport(true)
                                    }} class="containers">
                                        <input type="radio" name="import" value={isImport} checked={isImport === true}/>
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div className="card_body">
                                    <div className="img_blk">
                                        <img src={import1} color={colorCode}/>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="checkbox">
                                    <h5>Export</h5>
                                    <label onClick={() => {
                                        setImport(false)
                                        onSelect(false)
                                    }} class="containers">
                                        <input type="radio" name="import" checked={isImport === false}/>
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div className="card_body">
                                    <div className="img_blk">
                                        <img src={export1} color={colorCode}/>

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
                        style={{backgroundColor: "transparent", border: `.1rem solid ${colorCode}`, color: colorCode}}
                    >
                        <i class="fa-solid fa-arrow-left" style={{color: colorCode}}></i>
                        Back
                    </Link>
                    <Link
                        // to={routes.form.question3}
                        to="import/import-through"
                        type="button"
                        className="next_btn"
                        style={{backgroundColor: colorCode}}
                    >
                        Next
                        <i class="fa-solid fa-arrow-right"></i>
                    </Link>
                    {/* {

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

              <a
                href="#"
                type="button"
                className="next_btn"

                style={{ backgroundColor: colorCode }}
              >
                Next
                <i class="fa-solid fa-arrow-right"></i>
              </a>
          } */}


                </div>
            </section>
        </>
    );
};

export default Home;
