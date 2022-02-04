import React, { useState } from "react";

export default function About() {
    const [myStyle, setMyStyle] = useState({
        backgroundColor: "#212121",
        color: "white",
    });

    const [btnText, setToggleText] = useState('Dark');

    const toggleMode = () => {
        if (myStyle.color === 'white') {
            setMyStyle({
                backgroundColor: "white",
                color: "#212121",
            });
            setToggleText('Dark')
        } else {
            setMyStyle({
                backgroundColor: "#212121",
                color: "white",
            });
            setToggleText('Light');
        }
    };

    
    return (
        <div className="container my-5">
            <h1>About us</h1>
            <div  classNameName="accordion my-5" id="accordionExample">
                <div style={myStyle} className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            style={myStyle}
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            What is Text-Util?
                        </button>
                    </h2>
                    <div
                        style={myStyle}
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is
                            shown by default, until the collapse plugin adds the appropriate
                            classNamees that we use to style each element. These classNamees
                            control the overall appearance, as well as the showing and hiding
                            via CSS transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div style={myStyle} className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            style={myStyle}
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Why is Text-Util?
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is
                            hidden by default, until the collapse plugin adds the appropriate
                            classNamees that we use to style each element. These classNamees
                            control the overall appearance, as well as the showing and hiding
                            via CSS transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div style={myStyle} className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            style={myStyle}
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            Who are developer of Text-Util?
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is
                            hidden by default, until the collapse plugin adds the appropriate
                            classNamees that we use to style each element. These classNamees
                            control the overall appearance, as well as the showing and hiding
                            via CSS transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={toggleMode} className="btn btn-outline-primary my-5" type="submit">
                {btnText}
            </button>
        </div>
    );
}
