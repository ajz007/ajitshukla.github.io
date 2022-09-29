import React from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Skill({ skill, percentageValue, expertise }) {



    return (
        <div style={{ padding: "30px 30px 30px 30px" }}>
            <CircularProgressbarWithChildren radius={90}
                value={percentageValue}
                //text={`JAVA85%`}
                strokeWidth={2}
                circleRatio={1}
                styles={buildStyles({
                    textColor: "red",
                    pathColor: "orange",
                    textSize: "7px",
                })}>
                <span><strong>{skill}</strong></span>
                <div style={{ fontSize: 14 }} className={"highlight-"+expertise}>
                    <strong>{expertise}</strong>
                </div>
            </CircularProgressbarWithChildren>
        </div>
    );
}