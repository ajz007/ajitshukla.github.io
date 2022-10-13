import React from 'react';

export default function SkillBarChart({ skill, percentageValue, expertise, index }) {

    return (
        
            <div className="col-md-6">
                <div className="progress-wrap">
                    <h3><span className="name-left">{skill}</span><span className="value-right">{percentageValue/10}/10</span></h3>
                    <div className="progress">
                        <div className={`progress-bar progress-bar-${index%10} progress-bar-striped active`} role="progressbar"
                            aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: `${ percentageValue }%` }}>
                        </div>
                    </div>
                </div>
            </div>
            
        
    );
}