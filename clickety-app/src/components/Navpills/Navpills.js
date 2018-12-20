import React from "react";
import "./Navpills.css";

const Navpills = props => (
    <div>
        <ul className="nav nav-pills row">
            <h1>SmashBros Clicky Game</h1>
            <h1
                className={props.message.indexOf('incorrectly') !== -1 ? 
                    "desc-incorrect" : 
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </h1>
            <h1>Score: <span style={{color: "orange"}}>{props.curScore}</span> | Top Score: {props.topScore}</h1>
        </ul>
    </div>
);

export default Navpills;